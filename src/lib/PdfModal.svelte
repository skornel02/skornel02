<script lang="ts">
	import { Modal } from 'sveltestrap';

	export let location: string;

	let open = false;
	const toggle = () => (open = !open);
</script>

<a href={location} on:click|preventDefault={toggle} target="_blank" rel="noopener">
	<slot />
</a>
<Modal body header="Image preview" isOpen={open} {toggle} size="lg">
	<iframe src={location} frameborder="0" title="Embedded pfd" width="100%"></iframe>
	<a href={location} class="btn btn-primary" target="_blank" rel="noopener">Open</a>
</Modal>

<style>
	iframe {
		width: 100%;
		height: 70vh;
	}
	a.btn {
		display: flex;
		justify-content: center;
	}
</style>
