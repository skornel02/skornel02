import readme from '$static/readme.template.md?raw';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
    return new Response(readme, {
        headers: { 'Content-Type': 'text/markdown' }
    });
}
