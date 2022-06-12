import backCard from '$static/assets/card/business-card-back.svg?raw';
import { optimize, type OptimizedSvg } from 'svgo';

export async function get() {
    const optimized = optimize(backCard, {
        multipass: true,
        plugins: [
            { name: 'removeDimensions', active: false },
            { name: 'cleanupNumericValues', active: false },
            { name: 'removeRasterImages', active: true },
            { name: 'sortAttrs', active: true },
            { name: 'removeAttrs', active: true, params: { attrs: 'inkscape.*' } },
            { name: 'mergePaths', active: true},
            { name: 'removeOffCanvasPaths', active: true },
            { name: 'reusePaths', active: true }
        ]
    }) as OptimizedSvg;
    const svg = optimized.data;
    console.log(`SVG optimization on back: ${backCard.length}->${svg.length}`)

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'image/svg+xml',
    };
    return {
        headers,
        body: svg,
    };
}
