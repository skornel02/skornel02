<script lang="ts">
	import Image from '$lib/Image.svelte';
	import type {ImgLink} from 'src/showcase';
	import {closeModal} from 'svelte-modals';

	export let isOpen: boolean;
	export let link: ImgLink;

	let loading = true;

	$: {
		if (isOpen) {
			loading = true;
		}
	}

	const imageLoad = () => {
		loading = false;
	};
</script>

{#if isOpen}
	<div role="dialog" class="popup-modal">
		<div class="modal-box h-full pointer-events-auto flex flex-col">
			<button class="btn btn-sm btn-circle absolute right-2 top-2" on:click="{closeModal}">✕</button
			>
			<h2 class="text-center text-title text-3xl">Image preview</h2>
			<div class="flex-grow flex-shrink mx-auto my-4 flex flex-col justify-center">
				{#if loading}
					<progress class="progress w-56"></progress>
				{/if}
				<Image class="max-w-full max-h-full" meta="{link.data.meta}" alt="" on:load="{imageLoad}" />
			</div>
			<div class="flex flex-col justify-end">
				<a
					href="{link.data.path}"
					class="btn btn-primary flex justify-center"
					target="_blank"
					rel="noreferrer noopener">Open</a
				>
			</div>
		</div>
	</div>
{/if}
