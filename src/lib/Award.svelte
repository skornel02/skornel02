<script lang="ts">
	import FaFile from 'svelte-icons/fa/FaFile.svelte';

	export let id: string | undefined = undefined;
</script>

<li id={id} class="list-group-item d-flex justify-content-between align-items-center">
	<div class="icon text-warning mx-1">
		<slot name="icon">
			<FaFile />
		</slot>
	</div>
	<span class="badge bg-primary rounded-pill">
		<slot name="badge">Badge</slot>
	</span>
	<div class="w-100 d-flex justify-content-between align-items-start">
		<div class="ms-2 me-auto">
			<slot name="content">
				<div class="fw-bold">Main title</div>
				<a href="#page-top" target="_blank" rel="noopener"> Link </a>
			</slot>
		</div>
	</div>
</li>

<style>
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
	}
    
    .badge {
		min-width: 80px;
	}

</style>
