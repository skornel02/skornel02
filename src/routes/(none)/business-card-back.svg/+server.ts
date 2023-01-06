import backCard from '$static/business-card-back.template.svg?raw';
import {optimize} from 'svgo';
import {Liquid} from 'liquidjs';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const engine = new Liquid();

	const backCardRendered = await engine.parseAndRender(backCard, {
		email: "contact@skornel02.hu",
		website: "skornel02.hu"
	});

	const optimized = optimize(backCardRendered, {
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
	});
	if (optimized.error !== undefined) {
		console.error("Error while optimizing SVG:", optimized.error);
		throw error(500, optimized.error);
	}

	const svg = optimized.data;
	console.log(`SVG optimization on back: ${backCard.length}->${svg.length}`);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'image/svg+xml',
	};
	return new Response(svg, {headers});
}
