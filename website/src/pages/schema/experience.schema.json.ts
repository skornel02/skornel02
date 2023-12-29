import {APIRoute} from 'astro/dist/@types/astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {experienceSchema} from '../../schemas/experience';

export const GET: APIRoute = async ({}) => {
	// @ts-expect-error
	const schema = zodToJsonSchema(experienceSchema, 'experienceSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
