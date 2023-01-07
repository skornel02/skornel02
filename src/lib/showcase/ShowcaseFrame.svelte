<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<li
	id="{id}"
	class="relative block py-2 px-4 justify-between items-center border border-solid border-black first:rounded-t-md last:rounded-b-md"
>
	<slot />
</li>

<style>
	li {
		transition: 0.1s;
	}

	li:hover {
		transform: scale(1.01);
		z-index: 10;
	}

	li:has(>.divider) {
		border: 0;
	}

	li:hover:has(>.divider) {
		transform: unset;
	}

	@media print {
		li {
			width: 100%;
			display: inline-block;
			page-break-before: always;
			page-break-inside: avoid;
			page-break-after: always;
		}
		li:hover {
			transform: unset;
		}
	}
</style>
