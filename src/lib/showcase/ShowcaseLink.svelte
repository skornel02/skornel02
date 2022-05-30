<script lang="ts">
	import ImageModal from '$lib/modal/ImageModal.svelte';
	import PdfModal from '$lib/modal/PdfModal.svelte';
	import type {ImgLink, PdfLink, SimpleLink} from '../../showcase';
	import {typeToIcon} from './showcaseHelper';

	export let link: SimpleLink | PdfLink | ImgLink;
</script>

<div class="showcase-link">
	{#if link.type === 'img'}
		<ImageModal location="{link.data.path}" title="{link.text}" metadata="{link.data.meta}">
			<div class="file">
				<svelte:component this="{typeToIcon(link.icon)}" />
			</div>
		</ImageModal>
	{:else if link.type === 'pdf'}
		<PdfModal location="{link.url}" title="{link.text}">
			<div class="file">
				<svelte:component this="{typeToIcon(link.icon)}" />
			</div>
		</PdfModal>
	{:else if link.type === 'simple'}
		<a
			href="{link.url}"
			target="_blank"
			rel="noopener"
			class="btn btn-secondary"
			title="{link.text}"
		>
			<div class="file">
				<svelte:component this="{typeToIcon(link.icon)}" />
			</div>
		</a>
	{/if}
</div>

<style>
	.showcase-link {
		margin: 0 5px;
	}
</style>
