import {loadPostsOrdered} from '$lib/posts';

export async function get() {
	const posts = await loadPostsOrdered(false);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml',
	};
	return {
		headers,
		body: `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://skornel02.hu</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
  <url>
    <loc>https://skornel02.hu/me</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </url>
  <url>
    <loc>https://skornel02.hu/posts</loc>
    <lastmod>${posts[0].metadata.date}</lastmod>
  </url>
    ${posts
			.filter((post) => !post.metadata.hidden)
			.map((post) => {
				return `  
  <url>
    <loc>https://skornel02.hu${post.path}</loc>
    <lastmod>${post.metadata.date}</lastmod>
  </url>`;
			})
			.join('\n')}
</urlset>`,
	};
}
