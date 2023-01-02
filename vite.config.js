import { defineConfig } from "vite";
import {sveltekit} from '@sveltejs/kit/vite';
import path from 'path';

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
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;',
			},
		},
	},
	plugins: [
		sveltekit()
	],
	define: {
		'process.env.NODE_ENV': mode === 'production' ? '"production"' : '"development"'
	}
}));

export default config;
