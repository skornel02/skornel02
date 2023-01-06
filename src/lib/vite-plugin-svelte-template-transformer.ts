import type { Plugin } from "vite";
import { promises as fs } from 'fs';
import { parse } from 'node-html-parser';

type Options = {
    extension: string;
    toExtension: string;
    htmlSelectorQuery: string | undefined;
    bundlePath: string | undefined;
}

export default function vitePluginSvelteTemplateTransformer(options: Options): Plugin {
    const {extension, toExtension, htmlSelectorQuery, bundlePath} = options;
    const path = bundlePath ?? "build";

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

                        const fileContent = await fs.readFile(filePath, 'utf-8');
                        let nextFileContent = fileContent;

                        if (htmlSelectorQuery !== undefined) {
                            const root = parse(fileContent);
                            const svg = root.querySelector(htmlSelectorQuery);
                            if (!svg) {
                                console.error(`No element (query: ${htmlSelectorQuery}) found in ${filePath}`);
                                continue;
                            }
                            nextFileContent = svg.toString();
                        }
    
                        fs.writeFile(nextFilePath, nextFileContent, 'utf-8');
                    } catch (err) {
                        console.error(`Error transforming ${filePath}: ${err}`);
                    }
                    
                }
            } catch (err) {
                console.error(`Error opening build folder: ${err}`);
            }

            return;
        },
    };
}