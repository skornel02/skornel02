<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	const onDone = () => {
		dispatch('load');
	};
</script>

<Typewriter cascade="{true}" interval="{100}" on:done="{onDone}">
	<h1>
		<span class="text-secondary">Stefán</span>
		<span class="text-primary">Kornél</span>
	</h1>
</Typewriter>

<style>
	h1 {
		font-size: 1.9em;
		text-align: center;
		white-space: nowrap;
	}
</style>
