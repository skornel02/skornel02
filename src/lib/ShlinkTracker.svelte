<script context="module">
	export const prerender = false;
</script>

<script lang="ts">
	export let shlinkUrl: string | undefined;
</script>

{#if shlinkUrl}
	<img src="{shlinkUrl}" alt="" />
{/if}

<style>
	img {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 1px;
	}
</style>
