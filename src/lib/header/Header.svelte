<script lang="ts">
	import { page } from '$app/stores';
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem
	} from 'sveltestrap';

	let width = 0;
	let isOpen = true;
	$: isOpen = width >= 992;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<svelte:window bind:innerWidth={width}/>

<header >
	<Navbar dark color="primary" fixed="top" expand="lg" id="sideNav">
		<NavbarBrand href="#page-top" class="w-lg-100">
			<span class="d-block d-lg-none">Stefán Kornél</span>
			<span class="d-none d-lg-block">
				<img
					class="img-fluid img-profile rounded-circle mx-auto mb-2"
					src="assets/face.png"
					alt=""
				/>
			</span>
		</NavbarBrand>
		<NavbarToggler
			on:click={() => isOpen = !isOpen}
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</NavbarToggler>

		<Collapse {isOpen} navbar id="navbarSupportedContent" on:update={handleUpdate}>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link" class:active={$page.url.pathname === '/'} href="/"
						>Home</a
					>
				</li>
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link disabled" href="#A">A</a>
				</li>
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link disabled" href="#B">B</a>
				</li>
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link disabled" href="#C">C</a>
				</li>
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link disabled" href="#D">D</a>
				</li>
				<li class="nav-item">
					<a sveltekit:prefetch class="nav-link disabled" href="#E">E</a>
				</li>
			</ul>
		</Collapse>
	</Navbar>
</header>

<style>
</style>
