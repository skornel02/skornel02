<script lang="ts">
	import { Modal } from 'sveltestrap';

	let clazz: string = 'btn btn-primary';
	export { clazz as class };
	export let title: string;
	export let location: string;
	export let srcset: string;

	let loading = true;
	let open = false;

	const toggle = () => {
		open = !open;
		if (!open) {
			loading = true;
		}
	};

	const imageLoad = () => {
		loading = false;
	};
</script>

<a
	href={location}
	on:click|preventDefault={toggle}
	target="_blank"
	rel="noopener"
	class={clazz}
	{title}
>
	<slot />
</a>
<Modal body header="Image preview" isOpen={open} {toggle}>
	<img {srcset} alt="preview" class:loading-image={loading} on:load={imageLoad} />
	<a href={location} class="btn btn-primary modal-button" target="_blank" rel="noopener">Open</a>
</Modal>

<style>
	img {
		max-width: 100%;
		max-height: 100%;
	}
	.loading-image {
		height: 500px !important;
	}

	a.modal-button {
		display: flex;
		justify-content: center;
	}
</style>
