import backCard from '$static/business-card-back.template.svg?raw';
import {optimize} from 'svgo';
import {Liquid} from 'liquidjs';
import type { RequestHandler } from './$types';
import { SvgoConfig } from '$lib/svgo-config';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const engine = new Liquid();

	const backCardRendered = await engine.parseAndRender(backCard, {
		email: "contact@skornel02.hu",
		website: "skornel02.hu"
	});

	const optimized = optimize(backCardRendered, SvgoConfig);

	const svg = optimized.data;
	console.log(`SVG optimization on back: ${backCard.length}->${svg.length}`);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'image/svg+xml',
	};
	return new Response(svg, {headers});
}
