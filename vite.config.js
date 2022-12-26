import { defineConfig } from "vite";
import {sveltekit} from '@sveltejs/kit/vite';
import path from 'path';
import svgLoader from 'vite-svg-loader';

const config = defineConfig(() => ({
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
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;',
			},
		},
	},
	plugins: [
		sveltekit(),
		svgLoader({
			defaultImport: 'url',
			svgo: true,
			svgoConfig: {
				multipass: true,
			},
		}),
	],
}));

export default config;
