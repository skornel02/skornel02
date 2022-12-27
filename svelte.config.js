import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets'
import { imagePreprocessor } from 'svimg';
import {mdsvex} from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkSubSuper from 'remark-sub-super';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';
import {readdirSync} from 'fs';

const staticFiles = ['/sitemap.xml', '/rss.xml', '/readme.md'];
const posts = [];
try {
	posts.push(...readdirSync('src/posts/').map((post) => `/posts/${post}`.replace('.md', '')));
	console.log('Loaded posts: ', posts);
} catch (e) {
	console.log('Post loading failed!', e);
}

const competitionImages = [];
try {
	competitionImages.push(...readdirSync('static/assets/competitions/')
		.filter(name => name.endsWith(".jpeg"))
		.map(name => name.replace(".jpeg", ""))
		.flatMap((image) => [`/images/competitions/${image}.jpg`, `/images/competitions/${image}.webp`]));
	console.log('Loaded competition images: ', competitionImages);
} catch (e) {
	console.log('Competition images failed!', e);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		imagePreprocessor({
			inputDir: "static/",
			outputDir: "static/g/",
			avif: true,
			webp: true,
		}),
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		importAssets({
			http: false,
			sources: [
				{
					tag: 'img',
					srcAttributes: ['src'],
					srcsetAttributes: ['srcset'],
					filter: ({attributes}) => 'srcset' in attributes 
						&& (attributes.srcset.includes('?srcset') || attributes.srcset.includes('&srcset')),
				},
			]			
		}),
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
			entries: ['*', ...staticFiles, ...posts, ...competitionImages],
		},
	},
};

export default config;
