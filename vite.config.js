import {sveltekit} from '@sveltejs/kit/vite';
import path from 'path';
import {imagetools} from 'vite-imagetools';
import svgLoader from 'vite-svg-loader';

/** @type {import('vite').UserConfig} */
const config = {
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
		imagetools(),
	],
};

export default config;
