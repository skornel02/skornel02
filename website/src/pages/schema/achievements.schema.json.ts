import {APIRoute} from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {achievementSchema} from '../../schemas/achievements';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(achievementSchema, 'achievementSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
