import { APIRoute } from 'astro';
import {zodToJsonSchema} from 'zod-to-json-schema';
import {PeopleSchema} from '../../schemas/people';

export const GET: APIRoute = async ({}) => {
	const schema = zodToJsonSchema(PeopleSchema, 'peopleSchema');

	return new Response(JSON.stringify(schema), {
		headers: {
			'content-type': 'application/json',
		},
	});
};
