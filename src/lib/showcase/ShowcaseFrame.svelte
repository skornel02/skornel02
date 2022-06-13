<script lang="ts">
	export let id: string | undefined = undefined;
</script>

<li id="{id}" class="list-group-item column justify-content-between align-items-center">
	<slot />
</li>

<style>
	@keyframes highlight {
		0% {
			transform: none;
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: none;
		}
	}

	li {
		transition: 0.1s;
	}

	li:hover {
		transform: scale(1.01);
		z-index: 10;
	}
</style>
