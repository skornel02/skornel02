import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';
import {imagetools} from 'vite-imagetools';
import {mdsvex} from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkSubSuper from 'remark-sub-super';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';
import {readdirSync} from 'fs';

const staticFiles = ['/sitemap.xml', '/rss.xml'];
const posts = [];
try {
	posts.push(...readdirSync('src/posts/').map((post) => `/posts/${post}`.replace('.md', '')));
	console.log('Loaded posts: ', posts);
} catch (e) {
	console.log('Post loading failed!', e);
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;',
			},
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				post: 'src/routes/posts/_post.svelte',
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
			default: true,
			entries: ['*', ...staticFiles, ...posts],
		},

		vite: {
			resolve: {
				alias: {
					$static: path.resolve('static'),
					$src: path.resolve('src'),
				},
			},
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;',
					},
				},
			},
			plugins: [imagetools()],
		},
	},
};

export default config;
