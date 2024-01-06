import {APIRoute} from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {educationSchema} from '../../schemas/education';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(educationSchema, 'educationSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
