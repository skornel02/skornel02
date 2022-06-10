<script lang="ts">
	import Image from '$lib/Image.svelte';
	import face from '$static/assets/people/sk.jpeg?metadata&format=jpg;webp&width=160';

	let clazz: string;
	export {clazz as class};
</script>

<Image class={clazz} meta="{face}" alt="SK" />
