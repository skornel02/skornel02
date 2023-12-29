// @ts-check

import {optimize} from 'svgo';
import {Liquid} from 'liquidjs';

/**
 * @param {string} card XML code
 * @returns {Promise<string>} XML code
 */
export const transformBusinessFrontCard = async (card) => {
	const engine = new Liquid();

	const frontCardRendered = await engine.parseAndRender(card);

	const optimized = optimize(frontCardRendered);

	const svg = optimized.data;

	console.log(`SVG optimization on front: ${card.length}->${svg.length}`);

	return svg;
};

/**
 * @param {string} card XML code
 * @param {string} email
 * @param {string} website
 * @param {boolean} dynamic should contain animation
 * @returns {Promise<string>} XML code
 */
export const transformBusinessBackCard = async (card, email, website) => {
    const engine = new Liquid();

	const backCardRendered = await engine.parseAndRender(card, {
		email,
		website
	});

	const optimized = optimize(backCardRendered);

	const svg = optimized.data;
	console.log(`SVG optimization on back: ${card.length}->${svg.length}`);

    return svg;
}
