import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkSubSuper from 'remark-sub-super';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';
import { readdirSync } from 'fs';

const staticFiles = ['/sitemap.xml', '/rss.xml', '/readme.md', "/posts.json"];
const posts = [];
try {
	posts.push(...readdirSync('src/posts/').map((post) => `/posts/${post}`.replace('.md', '')));
	console.log('Loaded posts: ', posts);
} catch (e) {
	console.log('Post loading failed!', e);
}

const optimizedImages = [];
const folders = ['competitions', 'people'];
try {
	for (const folder of folders) {
		optimizedImages.push(...readdirSync(`static/assets/${folder}/`)
			.filter(name => name.endsWith(".jpeg"))
			.map(name => name.replace(".jpeg", ""))
			.flatMap((image) => [`/images/${folder}/${image}.jpg`, `/images/${folder}/${image}.webp`, `/images/${folder}/${image}.avif`]));
	}
	console.log('Loaded optimized images: ', optimizedImages);
} catch (e) {
	console.log('Competition images failed!', e);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				post: 'src/routes/(web)/posts/_post.svelte',
			},
			remarkPlugins: [remarkSubSuper, remarkEmoji, remarkFootnotes],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
		}),
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
		}),
		appDir: 'internal',
		files: {
			assets: 'static',
		},

		prerender: {
			entries: ['*', ...staticFiles, ...posts, ...optimizedImages],
		},
	},
};

export default config;
