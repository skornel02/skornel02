<script lang="ts">
	import { Modal } from 'sveltestrap';

	export let location: string;
	export let srcset: string;

	let open = false;
	const toggle = () => (open = !open);
</script>

<a href={location} on:click|preventDefault={toggle} target="_blank" rel="noopener">
	<slot />
</a>
<Modal body header="Image preview" isOpen={open} {toggle} >
	<img async srcset={srcset} alt="preview">
	<a href={location} class="btn btn-primary" target="_blank" rel="noopener">Open</a>
</Modal>

<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
	a.btn {
		display: flex;
		justify-content: center;
	}
</style>
