import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const username = 'skornel02';

export type RepositoryData = {
    id: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    language: string,
    stargazers_count: number,
};

export const prerender = true;

export const GET: RequestHandler = async ({ fetch }) => {
    const data = await (await fetch("https://api.github.com/users/" + username + "/repos")).json() as RepositoryData[];

    return json(data);
}