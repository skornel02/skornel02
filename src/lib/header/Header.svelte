<script lang="ts">
	import {page} from '$app/stores';
	import {scrolltotop} from 'svelte-scrollto-element';
	import Face from './Face.svelte';
	import {Home, Hammer, Newspaper} from 'lucide-svelte';
</script>

<header
	id="sideNav"
	class="bg-primary h-topBar fixed navbar z-20 lg:drawer lg:w-sideBar lg:h-screen lg:left-0 lg:top-0 lg:text-center print:hidden"
>
	<div class="drawer-side w-full flex flex-row lg:flex-col justify-center">
		<div
			use:scrolltotop="{{}}"
			class="ml-2 my-auto flex-1 normal-case text-background text-2xl lg:text-center lg:my-0 lg:mx-auto lg:flex-grow-0"
		>
			<span class="block lg:hidden">Stefán Kornél</span>
			<span class="hidden lg:flex h-44 justify-center flex-col">
				{#if $page.url.pathname === '/'}
					<div class="avatar">
						<Face class="mask mask-squircle" />
					</div>
				{:else}
					<span class=" text-4xl">Stefán Kornél</span>
				{/if}
			</span>
		</div>
		<ul
			class="menu menu-compact sm:menu-normal menu-horizontal lg:menu-vertical bg-primary text-background text-opacity-75 p-4 w-64"
		>
			<li>
				<a data-sveltekit-preload-data="hover" class:active="{$page.url.pathname === '/'}" href="/">
					<span class="hidden sm:inline">Home</span>
					<Home class="inline sm:hidden" />
				</a>
			</li>
			<li class="disabled">
				<a
					data-sveltekit-preload-data="hover"
					class:active="{$page.url.pathname.startsWith('/projects')}"
					href="/"
				>
					<span class="hidden sm:inline">Projects</span>
					<Hammer class="inline sm:hidden" />
				</a>
			</li>
			<li>
				<a
					data-sveltekit-preload-data="hover"
					class:active="{$page.url.pathname.startsWith('/posts')}"
					href="/posts"
				>
					<span class="hidden sm:inline">Blog</span>
					<Newspaper class="inline sm:hidden" />
				</a>
			</li>
		</ul>
	</div>
</header>

<div id="page-top" class="h-topBar lg:h-0"></div>

<style>
	a.active {
		color: var(--color-background);
		background-color: var(--color-secondary);
		opacity: 1;
	}

	li.disabled > a {
		cursor: default;
		color: var(--color-title);
	}
</style>
