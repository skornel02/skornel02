import { APIRoute } from "astro/dist/@types/astro";
import {zodToJsonSchema} from 'zod-to-json-schema';
import { competitionSchema } from "../../schemas/competition";

export const GET: APIRoute = async ({}) => {
    // @ts-expect-error
    const schema = zodToJsonSchema(competitionSchema, 'competitionSchema');

    return new Response(JSON.stringify(schema), {
        headers: {
            'content-type': 'application/json'
        }
    })
};