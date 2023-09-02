import type {RequestHandler} from '@sveltejs/kit';
import {promises as fs} from 'fs';
// @ts-expect-error Import hack https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/60862#discussioncomment-3711670
import sharp, { Sharp } from 'sharp';
declare function sharp(buffer: Buffer): Sharp

export const prerender = true;

export const GET: RequestHandler = async ({params}) => {
	const {fileName, folder, extension} = params;

	const asset = await fs.readFile(`./static/assets/${folder}/${fileName}.jpeg`);
	let sharpLoaded = sharp(asset);

	switch (folder) {
		case 'competitions':
			sharpLoaded = sharpLoaded
				.resize(500);
			break;
		case 'people':
			sharpLoaded = sharpLoaded
				.resize(160);
			break;
		default:
			break;
	}

	let mimeType: string;
	switch (extension) {
		case 'webp':
			sharpLoaded = sharpLoaded
				.webp({
					quality: 90
				});
			mimeType = 'image/webp';
			break;
		case 'jpg':
		case 'jpeg':
			sharpLoaded = sharpLoaded
			.jpeg({
				quality: 80
			})
			mimeType = 'image/jpeg';
			break;
		case 'avif':
			sharpLoaded = sharpLoaded
				.avif({
					quality: 90
				});
			mimeType = 'image/avif';
			break;
		default:
			throw new Error(`Unsupported image format: ${extension}`);
	}

	const transformed = await sharpLoaded
		.toBuffer();

	return new Response(transformed, {headers: {
		'Content-Type': mimeType,
	}});
};
