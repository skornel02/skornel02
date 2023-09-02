<script lang="ts">
	import {unknownHeSrc, type Person} from '$lib/people';

	export let member: Person;

	let src = member.pictureUrl;

	const onError = () => {
		src = unknownHeSrc;
	};
</script>

<a href="{member.website}" disabled="{member.website === undefined}" target="_blank" rel="noreferrer noopener">
	<div class="tooltip" data-tip="{member.name}">
		<img src="{src}" alt="{member.name}" title="{member.name}" on:error="{onError}" />
	</div>
</a>

<style>
	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
