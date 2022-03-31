import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkSubSuper from 'remark-sub-super';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				post: "src/routes/posts/_post.svelte"
			},
			remarkPlugins: [
				remarkSubSuper,
				remarkEmoji,
				remarkFootnotes
			],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings
			]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		appDir: "internal",

		prerender: {
			default: true,
			entries: ["*", "/sitemap.xml"]
		},

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
