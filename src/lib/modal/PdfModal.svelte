<script lang="ts">
	import type { PdfLink } from "src/showcase";
	import {closeModal} from 'svelte-modals';

	export let isOpen: boolean;
	export let link: PdfLink;
</script>

{#if isOpen}
	<div role="dialog" class="popup-modal">
		<div class="modal-box h-full pointer-events-auto flex flex-col">
			<button class="btn btn-sm btn-circle absolute right-2 top-2" on:click="{closeModal}">✕</button
			>
			<h2 class="text-center text-title text-3xl">Pdf preview</h2>
			<div class="max-h-[80%] my-4">
				<iframe src="{link.url}" frameborder="0" title="Embedded pfd" width="100%"></iframe>
			</div>
			<div class="flex-grow flex flex-col justify-end">
				<a
					href="{link.url}"
					class="btn btn-primary flex justify-center"
					target="_blank"
					rel="noreferrer noopener">Open</a
				>
			</div>
		</div>
	</div>
{/if}


<style>
	iframe {
		width: 100%;
		height: 70vh;
	}
</style>
