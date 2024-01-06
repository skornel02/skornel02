import {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {XMLBuilder} from 'fast-xml-parser';
import { createPostHref } from '../hrefs';

const siteUrl = 'https://skornel02.hu';

type RSS = {
	rss: {
		'@_version': string;
		'@_xmlns:atom': string;
		'channel': {
			'atom:link': {
				'@_href': string;
				'@_rel': string;
				'@_type': string;
			};
			'title': string;
			'link': string;
			'description': string;
			'item': {
				guid: string;
				title: string;
				link: string;
				description: string;
				pubDate: string;
			}[];
		};
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

	const rss: RSS = {
		rss: {
			'@_version': '2.0',
			'@_xmlns:atom': 'http://www.w3.org/2005/Atom',
			'channel': {
				'atom:link': {
					'@_href': `${baseUrl}/rss.xml`,
					'@_rel': 'self',
					'@_type': 'application/rss+xml',
				},
				'title': 'SK',
				'link': baseUrl,
				'description': "SK's posts' feed's cat",
				'item': posts.map((post) => ({
					guid: `posts/${post.slug}`,
					title: post.data.title,
					link: `${baseUrl}${createPostHref(post)}`,
					description: post.data.description ?? 'No description',
					pubDate: post.data.date.toUTCString(),
				})),
			},
		},
	};

	const xmlString = builder.build(rss);

	return new Response(xmlString, {
		headers: {
			'content-type': 'application/xml;charset=UTF-8',
		},
	});
};
