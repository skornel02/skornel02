x<script lang="ts">
	import { page } from '$app/stores';
	import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'sveltestrap';

	let width = 0;
	let isOpen = true;
	$: isOpen = width >= 992;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
</script>

<svelte:window bind:innerWidth={width} />

<header>
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
			on:click={() => (isOpen = !isOpen)}
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

<style lang="scss">
	:global(#sideNav) {
		.navbar-nav .nav-item .nav-link {
			font-weight: 600;
			text-transform: uppercase;
		}
	}

	@media (min-width: 992px) {
		:global(#sideNav) {
			text-align: center;
			position: fixed;
			top: 0;
			left: 0;
			width: $sidebar-base-width;
			height: 100vh;
			:global(.container-fluid) {
				margin: auto 0;
				display: flex;
				flex-direction: column;

				:global(.navbar-brand) {
					display: flex;

					margin: auto auto 0;
					padding: 0.5rem;
					:global(.img-profile) {
						max-width: 10rem;
						max-height: 10rem;
						border: 0.5rem solid fade-out($white, 0.8);
					}
				}
				:global(.navbar-collapse) {
					display: flex;
					align-items: flex-start;
					flex-grow: 0;

					width: 100%;
					margin-bottom: auto;
					:global(.navbar-nav) {
						flex-direction: column;

						width: 100%;
						:global(.nav-item) {
							display: block;
							.nav-link {
								display: block;
							}
						}
					}
				}
			}
		}
		:global(#sideNav) :global(.navbar-brand) {
			display: flex;
			margin: auto auto 0;
			padding: 0.5rem;
		}
		:global(#sideNav) :global(.navbar-brand) :global(.img-profile) {
			max-width: 10rem;
			max-height: 10rem;
			border: 0.5rem solid rgba(255, 255, 255, 0.2);
		}
		:global(#sideNav) :global(.navbar-collapse) {
			display: flex;
			align-items: flex-start;
			flex-grow: 0;
			width: 100%;
			margin-bottom: auto;
		}
		:global(#sideNav) :global(.navbar-collapse) :global(.navbar-nav) {
			flex-direction: column;
			width: 100%;
		}
		:global(#sideNav) :global(.navbar-collapse) :global(.navbar-nav) :global(.nav-item) {
			display: block;
		}
		:global(#sideNav) :global(.navbar-collapse) :global(.navbar-nav) :global(.nav-item) :global(.nav-link) {
			display: block;
		}
	}
</style>
