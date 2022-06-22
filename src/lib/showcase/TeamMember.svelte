<script lang="ts">
	import {Tooltip} from 'sveltestrap';
	import {unknownHeSrc, type Person} from '$lib/people';

	export let member: Person;

	let elem: HTMLElement;
	
	let src = member.pictureUrl;

	const onError = () => {
		src= unknownHeSrc;
	}
</script>

<a href="{member.website}" disabled="{member.website === undefined}" target="_blank">
	<div bind:this="{elem}">
		<img src={src} alt="{member.name}" title="{member.name}" on:error={onError} />
	</div>
	<Tooltip target="{elem}">{member.name}</Tooltip>
</a>

<style>
	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
