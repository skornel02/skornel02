<script lang="ts">
	import Typewriter from 'svelte-typewriter';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

    const onDone = () => {
        dispatch('load');
    };
</script>

<Typewriter cascade={true} interval={100} on:done={onDone}>
	<h1>
		<span id="lastName">Stefán</span> 
        <span id="firstName">Kornél</span>
	</h1>
</Typewriter>

<style>
	h1 {
        font-size: 1.9em;
        text-align: center;
        white-space: nowrap;
	}
    #lastName {
        color: var(--color-secondary);
    }
    #firstName {
        color: var(--color-primary);
    }
</style>
