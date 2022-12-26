/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />



declare namespace svelteHTML {
	interface HTMLProps<T extends EventTarget> extends HTMLAttributes<T> {
		'x-description'?: string;
	}
}

declare namespace NodeJS {
	interface ProcessEnv {
		SHLINK_KEY: string;
	}
}