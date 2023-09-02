<script lang="ts">
	import ImageModal from '$lib/modal/ImageModal.svelte';
	import PdfModal from '$lib/modal/PdfModal.svelte';
	import {openModal} from 'svelte-modals';
	import type {ImgLink, PdfLink, SimpleLink} from '../../showcase';
	import {typeToIcon} from './showcase-helper';

	export let link: SimpleLink | PdfLink | ImgLink;

	let hrefPath = '';
	switch (link.type) {
		case 'simple':
		case 'pdf':
			hrefPath = link.url;
			break;
		case 'img':
			hrefPath = link.data.path;
			break;
	}

	const handleModal = () => {
		if (link.type === 'pdf') {
			openModal(PdfModal, {
				link
			});
		} else if (link.type === 'img') {
			openModal(ImageModal, {
				link,
			});
		} else if (link.type === 'simple') {
			window.open(link.url, '_blank');
		}
	};
</script>

<div class="showcase-link">
	<a href="{hrefPath}" on:click|preventDefault="{handleModal}" class="btn btn-primary">
		<svelte:component this="{typeToIcon(link.icon)}" size="{24}" />
	</a>
</div>

<style>
	.showcase-link {
		margin: 0 5px;
	}
</style>
