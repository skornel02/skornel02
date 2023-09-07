import type { LayoutLoad } from './$types';
import { loadShlinkUrl } from '$lib/layout-helper';

export const prerender = true;

export const load: LayoutLoad = async ({url, fetch}) => {
	const route: string = url.pathname;
	const shlinkUrl: string | undefined = await loadShlinkUrl(route, fetch);

	return {
		route,
		shlinkUrl,
	};
};
