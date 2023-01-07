/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace NodeJS {
	interface ProcessEnv {
		SHLINK_KEY: string;
	}
}