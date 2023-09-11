<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	const onDone = () => {
		dispatch('load');
	};
</script>

<Typewriter mode="cascade" interval={100} on:done={onDone}>
	<h1 class="text-4xl whitespace-nowrap">
		<span class="text-secondary">Stefán</span>
		<span class="text-primary">Kornél</span>
	</h1>
</Typewriter>
