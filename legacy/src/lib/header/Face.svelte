<script lang="ts">
	import Image from '$lib/Image.svelte';
	import { getPeopleImageData } from "$lib/images";


	let clazz: string;
	export {clazz as class};

	const meMetadata = getPeopleImageData('sk').meta;
</script>

<div>
	<Image meta="{meMetadata}" alt="" class={clazz} />
</div>

<style>
	div{
		width: 160px;
		height: 160px;
	}
</style>