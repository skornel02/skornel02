import type { PageServerLoad } from './$types';
import {compile} from 'mdsvex';

export const prerender = true;
export const csr = false;

export const load: PageServerLoad = async ({url, fetch}) => {
	const route: string = url.pathname;
	const markDown: string = await (
        await fetch(`/readme.md`, {
            credentials: 'same-origin',
        })
    ).text();

    const renderedMarkdown = (await compile(
        markDown,
        {}
    )).code;

	return {
		route,
		markDown: renderedMarkdown,
	};
};
