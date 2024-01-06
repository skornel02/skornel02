import { APIRoute } from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {postSchema} from '../../schemas/posts';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(postSchema, 'postsSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
