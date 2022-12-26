<script lang="ts">
	import ImageModal from '$lib/modal/ImageModal.svelte';
	import PdfModal from '$lib/modal/PdfModal.svelte';
	import type {ImgLink, PdfLink, SimpleLink} from '../../showcase';
	import {typeToIcon} from './showcase-helper';

	export let link: SimpleLink | PdfLink | ImgLink;
</script>

<div class="showcase-link">
	{#if link.type === 'img'}
		<ImageModal location="{link.data.path}" title="{link.text}" metadata="{link.data.meta}">
			<svelte:component this="{typeToIcon(link.icon)}" size="{24}" />
		</ImageModal>
	{:else if link.type === 'pdf'}
		<PdfModal location="{link.url}" title="{link.text}">
			<svelte:component this="{typeToIcon(link.icon)}" size="{24}" />
		</PdfModal>
	{:else if link.type === 'simple'}
		<a
			href="{link.url}"
			target="_blank"
			rel="noreferrer noopener"
			class="btn btn-secondary"
			title="{link.text}"
		>
			<svelte:component this="{typeToIcon(link.icon)}" size="{24}" />
		</a>
	{/if}
</div>

<style>
	.showcase-link {
		margin: 0 5px;
	}
</style>
