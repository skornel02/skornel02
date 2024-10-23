import {CollectionEntry} from 'astro:content';
import {getRelativeLocaleUrl} from 'astro:i18n';

export function createPostHref(
	post: CollectionEntry<'posts'>,
	pageReference: number | undefined = undefined
): string {
	let href = getRelativeLocaleUrl('en', `/posts/${post.slug}`);

	if (pageReference !== undefined) {
		href += `?page=${pageReference}`;
	}

	return href;
}

export function createPostNavigationHref(page: number | undefined = undefined): string {
	let href = getRelativeLocaleUrl('en', '/posts');

	if (page !== undefined && page !== 1) {
		href += `/${page}`;
	}

	return href;
}
