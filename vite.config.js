import { defineConfig } from "vite";
import {sveltekit} from '@sveltejs/kit/vite';
import path from 'path';
import vitePluginSvelteTemplateTransformer from "./src/lib/vite-plugin-svelte-template-transformer";

const config = defineConfig(({mode}) => ({
	resolve: {
		alias: {
			$static: path.resolve('static'),
			$src: path.resolve('src'),
		},
	},
	server: {
		fs: {
			allow: ['./static/'],
		},
	},
	plugins: [
		sveltekit(),
		vitePluginSvelteTemplateTransformer({
			extension: '.svg.html',
			toExtension: '.svg',
			htmlSelectorQuery: 'svg',
		}),
	],
	define: {
		'process.env.NODE_ENV': mode === 'production' ? '"production"' : '"development"'
	}
}));

export default config;
