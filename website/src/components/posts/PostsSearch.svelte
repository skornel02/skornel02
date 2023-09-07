<script lang="ts">
	import {type CollectionEntry} from 'astro:content';
	import Fuse from 'fuse.js';
	import FuseAutocomplete from '../search/FuseAutocomplete.svelte';

	export let posts: CollectionEntry<'blog'>[];

	const fuse = new Fuse(posts, {
		keys: ['slig', 'data.title', 'data.description', 'data.tags', 'body'],
		includeScore: true,
	});
</script>

<FuseAutocomplete
	{fuse}
	dialogNamePicker={(item) => item.item.data.title}
	dialogLinkPicker={(item) => item.item.slug} />
