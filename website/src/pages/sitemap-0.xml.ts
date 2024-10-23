import {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {PageSize} from '../components/posts/PostPagination';
import {XMLBuilder} from 'fast-xml-parser';
import { createPostHref, createPostNavigationHref } from '../hrefs';

const siteUrl = 'https://skornel02.hu';

type SiteMap = {
	urlset: {
		'@_xmlns': string;
		'@_xmlns:news'?: string;
		'@_xmlns:xhtml'?: string;
		'@_xmlns:image'?: string;
		'@_xmlns:video'?: string;
		'url': {
			loc: string;
			lastmod: string;
		}[];
	};
};

export const GET: APIRoute = async ({request}) => {
	const {url} = request;
	const {hostname, port, protocol} = new URL(url);
	const baseUrl = import.meta.env.PROD ? siteUrl : `${protocol}//${hostname}:${port}`;

	const builder = new XMLBuilder({
		format: true,
		attributeNamePrefix: '@_',
		ignoreAttributes: false,
	});

	const posts = (await getCollection('posts', (post) => !post.data.hidden)).sort(
		(a, b) => b.data.date.getTime() - a.data.date.getTime()
	);

	const lastModifiedDate = posts[0]?.data?.date ?? new Date();

	const pageCount = Math.ceil(posts.length / PageSize);
	const pageNumbers = [];
	for (let i = 1; i <= pageCount; i++) {
		pageNumbers.push(i);
	}

	const sitemap: SiteMap = {
		urlset: {
			'@_xmlns': 'https://www.sitemaps.org/schemas/sitemap/0.9',
			'@_xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
			'@_xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
			'@_xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
			'@_xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1',
			'url': [
				{
					loc: `${baseUrl}`,
					lastmod: new Date().toISOString().slice(0, 10),
				},
				{
					loc: `${baseUrl}/me`,
					lastmod: new Date().toISOString().slice(0, 10),
				},
				...pageNumbers.map((pageNumber) => ({
					loc: `${baseUrl}${createPostNavigationHref(pageNumber)}`,
					lastmod: lastModifiedDate.toISOString().slice(0, 10),
				})),
				...posts.map((post) => ({
					loc: `${baseUrl}${createPostHref(post)}`,
					lastmod: post.data.date.toISOString().slice(0, 10),
				})),
			],
		},
	};

	const xmlString = builder.build(sitemap);

	return new Response(xmlString, {
		headers: {
			'content-type': 'application/xml;charset=UTF-8',
		},
	});
};
