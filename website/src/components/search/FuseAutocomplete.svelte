<script lang="ts" generics="T">
	import Fuse from 'fuse.js';

	export let fuse: Fuse<T>;
	export let handleSearchResults: undefined | ((results: Fuse.FuseResult<T>[]) => void) = undefined;
	export let dialogNamePicker: undefined | ((result: Fuse.FuseResult<T>) => string) = undefined;
	export let dialogLinkPicker: ((result: Fuse.FuseResult<T>) => string | undefined) = () => undefined;

	const searchEnabled = dialogNamePicker !== undefined;

	let searchBoxContent: string = '';
	let searchResults: Fuse.FuseResult<T>[] = [];

	const handleSearch = () => {
		const result = fuse.search(searchBoxContent);

		if (searchEnabled) {
			searchResults = result;
		}

		if (handleSearchResults) {
			handleSearchResults(result);
		}
	};
</script>

<div class="dropdown w-full" class:dropdown-open={searchResults.length !== 0}>
	<div class="form-control">
		<label class="label" for="postsSearchBox">
			<span class="label-text">Find what you are looking for!</span>
		</label>
		<input
			id="postsSearchBox"
			type="text"
			placeholder="Search..."
			class="input input-bordered"
			bind:value={searchBoxContent}
			on:input={handleSearch} />
	</div>
	{#if searchEnabled}
		<ul class="dropdown-content menu bg-primary">
			{#if searchResults.length === 0}
				<li class="text-white">No results found</li>
			{/if}

			{#each searchResults as result}
				<li class:disabled={dialogLinkPicker && dialogLinkPicker(result) === undefined} class="text-white">
					<a href={dialogLinkPicker && dialogLinkPicker(result)}>
						{dialogNamePicker && dialogNamePicker(result)} ({((result.score ?? 0) * 100).toFixed(0)}%)
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
