<script lang="ts">
	import type {PdfLink} from '../../schemas/achievements';
	import {openModal} from './modal-helper';

	export let slug: string;
	export let index: number;
	export let pdf: PdfLink;

	let id = `${slug}-${index}-pdf-modal`;

	let open = false;

	const handler = () => {
		if (!open) {
			open = true;
		}
		openModal(id, pdf.src);
	};

	pdf.buttonClass += ' join-item';
</script>

<div class="tooltip" data-tip={pdf.name}>
	<a class={pdf.buttonClass} on:click|preventDefault={handler} href={pdf.src} target="_blank">
		<slot name="icon" />
	</a>
</div>

<dialog {id} class="modal">
	{#if open}
		<div class="modal-box">
			<h3 class="font-bold text-lg">{pdf.name}</h3>
			<object title={pdf.name} data={pdf.src} type="application/pdf" class="w-full h-96">
				<p>It appears you don't have a PDF plugin for this browser.</p>
			</object>
			<div class="modal-action">
				<a class="btn btn-primary" href={pdf.src} target="_blank">Open</a>
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
