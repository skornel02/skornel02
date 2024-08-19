/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

import {Engine} from '@tsparticles/engine';

interface ImportMetaEnv {
	readonly PROD: boolean;
	readonly DEV: boolean;
	readonly SHLINK_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare global {
	var particlesInit: undefined | ((engine: Engine) => Promise<void>);
}
