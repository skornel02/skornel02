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

    const compiled = await compile(
        markDown,
        {}
    );
    if (compiled === undefined) {
        throw new Error('Compiled is undefined');
    }

    const renderedMarkdown = compiled.code;

	return {
		route,
		markDown: renderedMarkdown,
	};
};
