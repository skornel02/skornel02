import type { RepositoryData } from '../github-stats.json/+server';
import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {
    const data = await (await fetch("github-stats.json")).json() as RepositoryData[];

    const languages = [...new Set(data.map((stat) => stat.language))];

    return {
        githubStats: data,
        languages,
    };
}) satisfies PageLoad;