import {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {PageSize} from '../components/posts/PostPagination';
import {XMLBuilder} from 'fast-xml-parser';

const siteUrl = "https://skornel02.hu";

type SiteMap = {
	urlset: {
		'@_xmlns': string;
		'url': {
			loc: string;
			lastmod: string;
		}[];
	};
};

export const GET: APIRoute = async ({request}) => {
    const { url } = request;
    const { hostname, port, protocol } = new URL(url);
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
					loc: `${baseUrl}/posts/${pageNumber}`,
					lastmod: lastModifiedDate.toISOString().slice(0, 10),
				})),
				...posts.map((post) => ({
					loc: `${baseUrl}/posts/${post.slug}`,
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