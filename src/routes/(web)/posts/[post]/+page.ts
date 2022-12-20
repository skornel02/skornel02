import type {PageLoad} from './$types';
import { error } from '@sveltejs/kit';
import type { SvelteComponentTyped } from 'svelte';

export const load: PageLoad = async (a) => {
	try {
		const Thing: typeof SvelteComponentTyped = (await import(`../../../../posts/${a.params.post}.md`)).default;
		return {
			comp: Thing,
		};
	} catch (ex) {
		throw error(404);
	}
};
