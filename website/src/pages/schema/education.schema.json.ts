import { APIRoute } from "astro/dist/@types/astro";
import {zodToJsonSchema} from 'zod-to-json-schema';
import { educationSchema } from "../../schemas/education";

export const GET: APIRoute = async ({}) => {
    // @ts-expect-error
    const schema = zodToJsonSchema(educationSchema, 'educationSchema');

    return new Response(JSON.stringify(schema), {
        headers: {
            'content-type': 'application/json'
        }
    })
};