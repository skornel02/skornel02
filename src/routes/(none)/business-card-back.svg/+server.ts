import backCard from '$lib/card/business-card-back.svg?raw';
import {optimize, type OptimizedSvg} from 'svgo';

export const prerender = true;

export async function GET() {
	const backCardCleaned = backCard
		.replace(/\/\*/g, '')
		.replace(/\*\//g, '');
	const optimized = optimize(backCardCleaned, {
		multipass: true,
		plugins: [
			{name: 'removeDimensions', active: false},
			{name: 'cleanupNumericValues', active: false},
			{name: 'removeRasterImages', active: true},
			{name: 'sortAttrs', active: true},
			{name: 'removeAttrs', active: true, params: {attrs: 'inkscape.*'}},
			{name: 'mergePaths', active: true},
			{name: 'removeOffCanvasPaths', active: true},
			{name: 'reusePaths', active: true},
			{name: 'inlineStyles', active: false},
		],
	}) as OptimizedSvg;
	const svg = optimized.data;
	console.log(`SVG optimization on back: ${backCard.length}->${svg.length}`);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'image/svg+xml',
	};
	return new Response(svg, {headers});
}
