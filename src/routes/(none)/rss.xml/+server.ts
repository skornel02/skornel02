import type { Post } from '$lib/posts';
import type { RequestHandler } from './$types';
import { XMLBuilder } from 'fast-xml-parser';

export const prerender = true;

type RSS = {
  rss: {
    "@_version": string,
    "@_xmlns:atom": string,
    channel: {
      'atom:link': {
        '@_href': string,
        '@_rel': string,
        '@_type': string,
      },
      title: string,
      link: string,
      description: string,
      item: {
        guid: string,
        title: string,
        link: string,
        description: string,
        pubDate: string,
      }[],
    }
  }
};

export const GET: RequestHandler = async ({ fetch }) => {
  const posts: Post[] = await fetch('/posts.json')
    .then((res) => res.json());

  const postsToShow = posts.filter((post) => !post.metadata.hidden);

  const builder = new XMLBuilder({
    format: true,
    attributeNamePrefix: '@_',
    ignoreAttributes: false,
  });

  const rss: RSS = {
    rss: {
      "@_version": "2.0",
      "@_xmlns:atom": "http://www.w3.org/2005/Atom",
      channel: {
        'atom:link': {
          '@_href': 'https://skornel02.hu/rss.xml',
          '@_rel': 'self',
          '@_type': 'application/rss+xml',
        },
        title: 'SK',
        link: 'https://skornel02.hu',
        description: "SK's blog's feed's cat",
        item: postsToShow.map((post) => ({
          guid: `https://skornel02.hu${post.path}`,
          title: post.metadata.title,
          link: `https://skornel02.hu${post.path}`,
          description: post.metadata.description ?? 'No description',
          pubDate: new Date(post.metadata.date).toUTCString(),
        })),
      }
    }
  };

  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/atom+xml',
  };

  return new Response(builder.build(rss), { headers });
}
