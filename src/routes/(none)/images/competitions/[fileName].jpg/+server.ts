import type {RequestHandler} from '@sveltejs/kit';
import {promises as fs} from 'fs';
// @ts-expect-error Import hack https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60862#discussioncomment-3711670
import sharp, { Sharp } from 'sharp';
declare function sharp(buffer: Buffer): Sharp

export const prerender = true;

export const GET: RequestHandler = async ({params}) => {
	const {fileName} = params;

	const asset = await fs.readFile(`./static/assets/competitions/${fileName}.jpeg`);
	const transformed = await sharp(asset)
		.resize(500)
		.jpeg({
			quality: 80
		})
		.toBuffer();

	return new Response(transformed, {headers: {
		'Content-Type': 'image/jpeg',
	}});
};
