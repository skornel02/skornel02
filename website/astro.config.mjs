import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://skornel02.hu',
	integrations: [tailwind(), svelte()],
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	}
});