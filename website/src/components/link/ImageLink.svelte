<script lang="ts">
	import type {ImageLink} from '../../schemas/achievements';
	import {openModal} from './modal-helper';

	export let slug: string;
	export let index: number;
	export let image: ImageLink;

	let id = `${slug}-${index}-image-modal`;

	let open = false;

	const handler = () => {
		if (!open) {
			open = true;
		}

		openModal(id, image.src.src);
	};

	image.buttonClass += ' join-item';
</script>

<div class="tooltip" data-tip={image.name}>
	<a
		class={image.buttonClass}
		on:click|preventDefault={handler}
		href={image.src.src}
		target="_blank">
		<slot name="icon" />
	</a>
</div>

<dialog {id} class="modal">
	{#if open}
		<div class="modal-box">
			<h3 class="font-bold text-lg">{image.name}</h3>
			<slot />
			<div class="modal-action">
				<a class="btn btn-primary" href={image.src.src} target="_blank">Open</a>
				<form method="dialog">
					<button class="btn">Close</button>
				</form>
			</div>
		</div>
	{/if}
</dialog>

<style>
	/* Hack for dialog element */
	.join-item:where(*:last-child:not(:first-child):not(.join) .join-item) {
		border-top-right-radius: inherit !important;
		border-bottom-right-radius: inherit !important;
	}
</style>
