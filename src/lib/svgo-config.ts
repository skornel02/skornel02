import type { Config } from "svgo";

export const SvgoConfig: Config = {
    multipass: true,
    plugins: [
        {name: 'removeRasterImages'},
        {name: 'sortAttrs'},
        {name: 'removeAttrs', params: {attrs: 'inkscape.*'}},
        {name: 'mergePaths'},
        {name: 'removeOffCanvasPaths'},
        {name: 'reusePaths'},
        {name: 'inlineStyles'},
    ],
}