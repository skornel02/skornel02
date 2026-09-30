import { posts } from '#content';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://skornel02.hu';
  const visiblePosts = posts
    .filter((post) => !post.hidden)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const itemsXml = visiblePosts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/posts/${post.slug}/</link>
      <guid>${baseUrl}/posts/${post.slug}/</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stefán Kornél's Blog</title>
    <description>Personal blog and portfolio of Stefán Kornél</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>hu</language>
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
