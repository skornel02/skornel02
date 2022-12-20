<script lang="ts">
	import type { SectionData } from './+page';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import {onMount} from 'svelte';
	import Showcase from '$lib/showcase/Showcase.svelte';
	import {animateScroll} from 'svelte-scrollto-element';
	import {backOut, circInOut} from 'svelte/easing';
	import Experiences from '$lib/experiences/Experiences.svelte';
	import Education from '$lib/experiences/Education.svelte';

	let darkTheme = false;

	const sections: SectionData = {};
	let height: number;
	let currentSection = {
		index: -1,
		top: 0,
		title: '',
	};

	$: {
		if (Object.keys(sections).length > 0) {
			let maxI = 0;
			for (let i = 1; i < Object.keys(sections).length; i++) {
				const key = Object.keys(sections)[i];
				const value = sections[key];
				if (height > value.top) {
					maxI = i;
				}
			}
			currentSection = sections[Object.keys(sections)[maxI]];
		}
	}

	onMount(() => {
		darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

		let index = 0;
		document.querySelectorAll('.resume-section').forEach((el) => {
			if (el.classList.contains('d-none')) return;
			sections[el.id] = {
				index: index++,
				top: document.getElementById(el.id).offsetTop,
				title: document.getElementById(el.id).getAttribute('x-description'),
			};
		});
		const top = sections['about'].top ?? 0;

		Object.keys(sections).forEach((key) => {
			sections[key].top = sections[key].top - top;
		});
	});

	const handleKeyboard = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			if (currentSection.index > 0) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index - 1]),
					duration: 250,
					easing: circInOut,
				});
			}
		} else if (e.key === 'ArrowRight') {
			if (currentSection.index < Object.keys(sections).length - 1) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1]),
					duration: 250,
					easing: circInOut,
				});
			}
		} else if (e.key === 'PageUp') {
			if (currentSection.index > 0) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index - 1]),
					duration: 0,
					easing: backOut,
				});
			}
		} else if (e.key === 'PageDown') {
			if (currentSection.index < Object.keys(sections).length - 1) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1]),
					duration: 0,
					easing: backOut,
				});
			}
		} else if (e.key === 'h') {
			window.location.href = 'https://home.skornel02.hu';
		}
	};
</script>

<svelte:window bind:scrollY="{height}" on:keydown="{handleKeyboard}" />

<svelte:head>
	<meta property="og:title" content="SK" />
	<meta property="og:description" content="Personal site of SK" />
	<meta property="og:type" content="profile" />
	<title>{currentSection.title}</title>
	<meta name="description" content="Personal site of SK" />
</svelte:head>

<div class="container-fluid p-0">
	<section class="resume-section p-3 p-lg-5 d-flex d-column" id="about" x-description="SK - Home">
		<div class="my-auto">
			<h1 id="name" class="mb-0">
				<div class="text-secondary">Stefán</div>
				<span class="text-primary">Kornél</span>
			</h1>
			<p class="mb-5">
				I am a young tinkerer that loves programming. My current goal is to start working in the
				field. Learning to bake is in progress!
			</p>
			<ul class="list-inline list-social-icons mb-0">
				<li class="list-inline-item">
					<a id="social-gh" href="https://github.com/skornel02">
						<div class="icon">
							<FaGithub />
						</div>
					</a>
				</li>
				<li id="social-fb" class="list-inline-item">
					<a href="https://www.facebook.com/stefankornel02">
						<div class="icon">
							<FaFacebook />
						</div>
					</a>
				</li>
				<li id="social-email" class="list-inline-item">
					<a href="mailto:contact@skornel02.hu">
						<div class="icon">
							<FaEnvelope />
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="experience"
		x-description="SK - Experiences"
	>
		<Experiences />
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="education"
		x-description="SK - Education"
	>
		<Education />
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="skills"
		x-description="SK - Skills"
	>
		<div class="my-auto">
			<h2 class="mb-5">Skills</h2>

			<div class="subheading mb-3">Programming Languages &amp; Tools</div>
			<ul class="list-inline list-icons">
				<li class="list-inline-item">
					<img
						src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
						alt="arduino"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
						alt="bootstrap"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
						alt="csharp"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
						alt="css3"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
						alt="figma"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
						alt="firebase"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
						alt="flutter"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
						alt="git"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
						alt="html5"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
						alt="java"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
						alt="javascript"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
						alt="postman"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
						alt="react"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
						alt="rust"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
						alt="spring"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
						alt="svelte"
						width="40"
						height="40"
					/>
				</li>
				<li class="list-inline-item">
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
						alt="typescript"
						width="40"
						height="40"
					/>
				</li>
			</ul>
			<img
				class="d-block mx-auto img-fluid"
				src="https://github-readme-stats.vercel.app/api/top-langs?username=skornel02&show_icons=true&locale=en&layout=compact&theme={darkTheme
					? 'dark'
					: 'light'}"
				alt="skornel02's stats on github"
				width="350"
			/>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column d-none"
		id="interests"
		x-description="SK - Interests"
	>
		<div class="my-auto">
			<h2 class="mb-5">Interests</h2>
			<p></p>
			<p class="mb-0"></p>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="awards"
		x-description="SK - Awards"
	>
		<div class="my-auto">
			<h2 class="mb-5">Awards &amp; Certifications</h2>
			<Showcase />
		</div>
	</section>
</div>

<style lang="scss">
	h1 {
		font-size: 6rem;
		line-height: 5.5rem;
	}
	h2 {
		font-size: 3.5rem;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 3rem;
			line-height: 3rem;
		}
		h2 {
			font-size: 2rem;
		}
	}

	:global(.icon) {
		display: inline-block;
		width: 32px;
		height: 32px;
	}

	:global(section.resume-section) {
		border-bottom: 1px solid;
		border-color: var(--color-secondary);
		padding-top: 5rem !important;
		padding-bottom: 5rem !important;
	}

	:global(section.resume-section) :global(.resume-item) :global(.resume-date) {
		min-width: max-content;
	}

	@media (min-width: 768px) {
		section:global(.resume-section) {
			min-height: 100vh;
		}

		:global(section.resume-section) :global(.resume-item) :global(.resume-date) {
			min-width: 12rem;
		}
	}

	@media (min-width: 992px) {
		:global(section.resume-section) {
			padding-top: 3rem !important;
			padding-bottom: 3rem !important;
		}
	}

	@media print {
		:global(section.resume-section) {
			padding-top: 1rem !important;
			padding-bottom: 1rem !important;
			border-bottom-width: 0;

			:first-child {
				padding-top: 0 !important;
				margin-top: 0 !important;
			}

			:global(h2) {
				text-align: center;
			}
		}

		#name {
			text-align: center;
			div {
				display: inline;
			}
		}

		:global(#awards.resume-section) {
			page-break-inside: unset;
		}

		:global(.resume-item) {
			break-inside: avoid;
			page-break-inside: avoid;
		}
	}
</style>
