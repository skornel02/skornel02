import {APIRoute} from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {experienceSchema} from '../../schemas/experience';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(experienceSchema, 'experienceSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
