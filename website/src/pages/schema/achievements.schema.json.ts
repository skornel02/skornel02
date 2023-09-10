import { APIRoute } from "astro/dist/@types/astro";
import {zodToJsonSchema} from 'zod-to-json-schema';
import { achievementSchema } from "../../schemas/achievements";

export const GET: APIRoute = async ({}) => {
    // @ts-expect-error
    const schema = zodToJsonSchema(achievementSchema, 'achievementSchema');

    return new Response(JSON.stringify(schema), {
        headers: {
            'content-type': 'application/json'
        }
    })
};