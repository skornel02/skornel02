<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Modal } from 'sveltestrap';

	export let location: string;
	export let srcset: string;

	let loading = true;
	let open = false;
	
	const toggle = () => {
		open = !open
		if (!open) {
			loading = true;
		}
	};

	const imageLoad = () => {
		loading = false;
	}
</script>

<a href={location} on:click|preventDefault={toggle} target="_blank" rel="noopener">
	<slot />
</a>
<Modal body header="Image preview" isOpen={open} {toggle} >
	<img srcset={srcset} alt="preview" class:loading-image={loading} on:load={imageLoad}>
	<a href={location} class="btn btn-primary" target="_blank" rel="noopener">Open</a>
</Modal>	
<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
	.loading-image {
		height: 500px !important;
	}
	a.btn {
		display: flex;
		justify-content: center;
	}
</style>
