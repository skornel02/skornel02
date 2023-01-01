import type { Post } from '$lib/posts';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async ({fetch}) => {
  const posts: Post[] = await fetch('/posts.json')
    .then((res) => res.json());

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	};
	return new Response(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <atom:link href="https://skornel02.hu/rss.xml" rel="self" type="application/rss+xml" />
    <title>SK</title>
    <link>https://skornel02.hu</link>
    <description>SK's blog's feed's cat</description>
    ${posts
			.filter((post) => !post.metadata.hidden)
			.map((post) => {
				return `  
    <item>
      <guid>https://skornel02.hu${post.path}</guid>
      <title>${post.metadata.title}</title>
      <link>https://skornel02.hu${post.path}</link>
      <description>${post.metadata.description ?? 'No description'}</description>
      <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
    </item>`;
			})
			.join('\n')}
  </channel>
</rss>`, { headers });
}
