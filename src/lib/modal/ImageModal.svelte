<script lang="ts">
	import Image from '$lib/Image.svelte';
	import type {ImageMetadata} from '$lib/images';
	import {Modal} from 'sveltestrap';

	let clazz: string = 'btn btn-primary';
	export {clazz as class};
	export let title: string;
	export let location: string;
	export let metadata: ImageMetadata[];

	let loading = true;
	let open = false;

	const toggle = () => {
		open = !open;
		if (!open) {
			loading = true;
		}
	};

	const imageLoad = () => {
		loading = false;
	};
</script>

<a
	href="{location}"
	on:click|preventDefault="{toggle}"
	target="_blank"
	rel="noreferrer noopener"
	class="{clazz}"
	title="{title}"
>
	<slot />
</a>
<Modal body header="Image preview" isOpen="{open}" toggle="{toggle}">
	{#if loading}
		<div style="--loader-height: {metadata[0].height}px;">
			<div class="loading-image"></div>
		</div>
	{/if}
	<Image meta="{metadata}" alt="" on:load="{imageLoad}" />
	<!-- <img {srcset} alt="preview" class:loading-image={loading} on:load={imageLoad} /> -->
	<a href="{location}" class="btn btn-primary modal-button" target="_blank" rel="noreferrer noopener">Open</a>
</Modal>

<style>
	:global(img) {
		max-width: 100%;
		max-height: 100%;
	}
	.loading-image {
		height: 500px !important;
		height: var(--loader-height) !important;
	}

	a.modal-button {
		display: flex;
		justify-content: center;
	}
</style>
