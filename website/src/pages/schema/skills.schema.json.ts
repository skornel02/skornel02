import { APIRoute } from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import { skillsSchema } from '../../schemas/skills';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(skillsSchema, 'skillsSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
