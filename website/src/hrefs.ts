import { CollectionEntry } from "astro:content";

export function createPostHref(
    post: CollectionEntry<'posts'>,
    pageReference: number | undefined = undefined
): string {
    let href = `${import.meta.env.BASE_URL}posts/${post.slug}`;

    if (pageReference !== undefined) {
	    href += `?page=${pageReference}`;        
    }

    return href;
}

export function createPostNavigationHref(
    page: number | undefined = undefined
): string {
    let href = `${import.meta.env.BASE_URL}posts`;

    if (page !== undefined && page !== 1) {
        href += `/${page}`;
    }

    return href;
}
