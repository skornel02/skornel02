import frontCard from '$static/business-card-front.template.svg?raw';
import {optimize} from 'svgo';
import {Liquid} from 'liquidjs';
import type { RequestHandler } from './$types';
import { SvgoConfig } from '$lib/svgo-config';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const engine = new Liquid();

	const frontCardRendered = await engine.parseAndRender(frontCard);

	const optimized = optimize(frontCardRendered, SvgoConfig);

	const svg = optimized.data;
	console.log(`SVG optimization on front: ${frontCard.length}->${svg.length}`);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'image/svg+xml',
	};


	return new Response(svg, { headers});
}
