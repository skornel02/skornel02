import type { Plugin } from "vite";
import { promises as fs } from 'fs';
import nodeHtmlToImage from 'node-html-to-image'
import { parse } from 'node-html-parser';

type Options = {
    extension: string;
    toExtension: string;
    bundlePath: string | undefined;
    width?: number;
    height?: number;
    transparent?: boolean;
}

export default function vitePluginSvelteImageTransformer(options: Options): Plugin {
    const { extension, toExtension, bundlePath, width: widthPx, height: heightPx, transparent} = options;
    const path = bundlePath ?? "build";
    const width = widthPx ? `${widthPx}px` : "unset";
    const height = heightPx ? `${heightPx}px` : "unset";

    return {
        name: 'vite-plugin-svelte-svg-transformer',
        enforce: 'post',
        async closeBundle() {
            try {
                const files = await fs.readdir(path);
                for (const file of files) {
                    if (!file.endsWith(extension)) {
                        continue;
                    }
                    const filePath = `${path}/${file}`;
                    const nextFilePath = `${path}/${file.replace(extension, toExtension)}`;

                    try {

                        console.log(`Transforming ${filePath} into ${nextFilePath}`);

                        const htmlContent = await fs.readFile(filePath, 'utf-8');
                        const root = parse(htmlContent);
                        const newElement = parse(`<style>body {width: ${width}; height: ${height}; }</style>`);
                        root.querySelector("head")?.appendChild(newElement);

                        const links = root.querySelectorAll("link[href]");
                        for (const link of links) {
                            if (link.getAttribute("href")?.endsWith(".css")) {
                                const cssContent = await fs.readFile(`${path}/${link.getAttribute("href") ?? ""}`, 'utf-8');
                                const newElement = parse(`<style>${cssContent}</style>`);
                                root.querySelector("head")?.appendChild(newElement);
                            }
                            link.setAttribute("href", "");
                        }

                        const nextHtml = root.toString();
                        await fs.writeFile(`${nextFilePath}.transformed.html`, nextHtml, "utf-8");

                        await nodeHtmlToImage({
                            output: nextFilePath,
                            html: nextHtml,
                            transparent,
                        });
                    } catch (err) {
                        console.error(`Error transforming ${filePath}: ${err}`);
                    }
                }
            } catch (err) {
                console.error(`Error opening build folder: ${err}`);
            }
        },
    };
}