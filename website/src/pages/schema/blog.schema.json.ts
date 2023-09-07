import { APIRoute } from "astro/dist/@types/astro";
import {zodToJsonSchema} from 'zod-to-json-schema';
import { blogSchema } from "../../schemas/blog";

export const GET: APIRoute = async ({}) => {
    // @ts-expect-error
    const schema = zodToJsonSchema(blogSchema, 'blogSchema');

    return new Response(JSON.stringify(schema), {
        headers: {
            'content-type': 'application/json'
        }
    })
};