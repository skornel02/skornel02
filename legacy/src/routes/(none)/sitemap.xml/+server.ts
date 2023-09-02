import type { Post} from '$lib/posts';
import type { RequestHandler } from './$types';
import { XMLBuilder } from 'fast-xml-parser';

export const prerender = true;

type SiteMap = {
  urlset: {
    "@_xmlns": string,
    url: {
      loc: string,
      lastmod: string,
    }[],
  }
};

export const GET: RequestHandler = async ({fetch}) => {
  const posts: Post[] = await fetch('/posts.json')
    .then((res) => res.json());
  const postsToShow = posts.filter((post) => !post.metadata.hidden);

    
  const builder = new XMLBuilder({
    format: true,
    attributeNamePrefix: '@_',
    ignoreAttributes: false,
  });

  const sitemap: SiteMap = {
    urlset: {
      "@_xmlns": "https://www.sitemaps.org/schemas/sitemap/0.9",
      url: [
        {
          loc: "https://skornel02.hu",
          lastmod: new Date().toISOString().slice(0, 10)
        },
        {
          loc: "https://skornel02.hu/me",
          lastmod: new Date().toISOString().slice(0, 10)
        },
        {
          loc: "https://skornel02.hu/posts",
          lastmod: posts[0].metadata.date
        },
        ...postsToShow.map(post => ({
          loc: `https://skornel02.hu${post.path}`,
          lastmod: post.metadata.date
        }))
      ]
    }
  }

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	};
  
	return new Response(builder.build(sitemap), { headers });
}
