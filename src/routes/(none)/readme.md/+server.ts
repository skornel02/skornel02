import readme from '$static/readme-template.md?raw';

export const prerender = true;

export async function GET() {

    return new Response(readme, {
        headers: { 'Content-Type': 'text/markdown' }
    });
}
