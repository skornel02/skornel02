<script lang="ts">
	import {type CollectionEntry} from 'astro:content';
	import Fuse from 'fuse.js';
	import FuseAutocomplete from '../search/FuseAutocomplete.svelte';
	import {createPostHref} from '../../hrefs';

	export let posts: CollectionEntry<'posts'>[];

	const fuse = new Fuse(posts, {
		keys: ['slug', 'data.title', 'data.description', 'data.tags', 'body'],
		includeScore: true,
	});
</script>

<FuseAutocomplete
	{fuse}
	dialogNamePicker={(item) => item.item.data.title}
	dialogLinkPicker={(item) => createPostHref(item.item)} />
