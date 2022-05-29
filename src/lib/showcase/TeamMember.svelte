<script lang="ts">
    import { Tooltip } from 'sveltestrap';
	import type { Person } from '$lib/people';

	export let member: Person;

    let elem;
</script>

<a href={member.website} disabled={member.website === undefined} target="_blank">
	<div bind:this={elem}>
		<img src={member.pictureUrl} alt={member.name} title={member.name} />
	</div>
    <Tooltip target={elem}>{member.name}</Tooltip>
</a>

<style>
	img {
		width: 40px;
		height: 40px;
        object-fit: cover;
        border-radius: 50%;
	}
</style>
