<script lang="ts">
	import type {SectionData} from './+page';
	import {Github, Facebook, Mail, Linkedin, List} from 'lucide-svelte';
	import {onMount} from 'svelte';
	import Showcase from '$lib/showcase/Showcase.svelte';
	import {animateScroll} from 'svelte-scrollto-element';
	import {circInOut, sineInOut} from 'svelte/easing';
	import Experiences from '$lib/experiences/Experiences.svelte';
	import Education from '$lib/experiences/Education.svelte';

	let darkTheme = false;

	const sections: SectionData = {};
	let height: number;
	let currentSection = {
		index: -1,
		top: 0,
		title: 'Website of SK',
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
			if (el.classList.contains('hidden')) return;
			sections[el.id] = {
				index: index++,
				top: document.getElementById(el.id)!.offsetTop,
				title: document.getElementById(el.id)!.getAttribute('data-description') ?? 'SK - Home',
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
				e.preventDefault();
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index - 1])!,
					duration: 350,
					easing: circInOut,
				});
			}
		} else if (e.key === 'ArrowRight') {
			if (currentSection.index < Object.keys(sections).length - 1) {
				e.preventDefault();
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1])!,
					duration: 350,
					easing: circInOut,
				});
			}
		} else if (e.key === 'PageUp') {
			if (currentSection.index > 0) {
				e.preventDefault();
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index - 1])!,
					duration: 500,
					easing: sineInOut,
				});
			}
		} else if (e.key === 'PageDown') {
			if (currentSection.index < Object.keys(sections).length - 1) {
				e.preventDefault();
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1])!,
					duration: 500,
					easing: sineInOut,
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

<div class="md:container md:mx-auto p-0">
	<section class="resume-section" id="about" data-description="SK - Home">
		<div class="my-auto">
			<h1 id="name" class="mb-0">
				<div class="text-secondary">Stefán</div>
				<span class="text-primary">Kornél</span>
			</h1>
			<p class="mb-5">
				I am a young tinkerer that loves programming. My current goal is to start working in the
				field. Learning to bake is in progress!
			</p>
			<d class="mx-0">
				<a
					id="social-card"
					class="btn btn-md btn-outline btn-secondary"
					href="/me"
					data-sveltekit-reload
				>
					<List size="{32}" />
				</a>
				<a
					id="social-gh"
					class="btn btn-md btn-outline btn-primary"
					href="https://github.com/skornel02"
				>
					<Github size="{32}" />
				</a>
				<a
					class="btn btn-md btn-outline btn-primary"
					href="https://www.facebook.com/stefankornel02"
				>
					<Facebook size="{32}" />
				</a>
				<a class="btn btn-md btn-outline btn-primary" href="https://linkedin.com/in/skornel02">
					<Linkedin size="{32}" />
				</a>
				<a class="btn btn-md btn-outline btn-primary" href="mailto:contact@skornel02.hu">
					<Mail size="{32}" />
				</a>
			</d>
		</div>
	</section>

	<section class="resume-section" id="experience" data-description="SK - Experiences">
		<Experiences />
	</section>

	<section class="resume-section" id="education" data-description="SK - Education">
		<Education />
	</section>

	<section class="resume-section" id="skills" data-description="SK - Skills">
		<div class="my-auto">
			<h2 class="mb-5 text-3xl sm:text-pageSection">Skills</h2>

			<div class="subheading mb-3">Programming Languages &amp; Tools</div>
			<ul class="flex flex-wrap">
				<li>
					<img
						src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
						alt="arduino"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
						alt="bootstrap"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
						alt="csharp"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
						alt="css3"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
						alt="figma"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
						alt="firebase"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
						alt="flutter"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
						alt="git"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
						alt="html5"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
						alt="java"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
						alt="javascript"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
						alt="postman"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
						alt="react"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg"
						alt="rust"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
						alt="spring"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
						alt="svelte"
						width="40"
						height="40"
					/>
				</li>
				<li>
					<img
						src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
						alt="typescript"
						width="40"
						height="40"
					/>
				</li>
			</ul>
			<img
				class="block mx-auto"
				src="https://github-readme-stats.vercel.app/api/top-langs?username=skornel02&show_icons=true&locale=en&layout=compact&theme={darkTheme
					? 'dark'
					: 'light'}"
				alt="skornel02's stats on github"
				width="350"
			/>
		</div>
	</section>

	<section class="resume-section hidden" id="interests" data-description="SK - Interests">
		<div class="my-auto">
			<h2 class="mb-5 text-3xl sm:text-pageSection">Interests</h2>
			<p></p>
			<p class="mb-0"></p>
		</div>
	</section>

	<section class="resume-section" id="awards" data-description="SK - Awards">
		<div class="my-auto">
			<h2 class="mb-5 text-3xl sm:text-pageSection">Awards &amp; Certifications</h2>
			<Showcase />
		</div>
	</section>
</div>
<input type="checkbox" id="showcase-modal" class="modal-toggle" />
<div class="modal">
	<div id="showcase-modal-data" class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="showcase-modal" class="btn">Yay!</label>
		</div>
	</div>
</div>

<style>
	@media print {
		#name {
			text-align: center;
		}
		#name div {
			display: inline;
		}

		#awards.resume-section {
			page-break-inside: unset;
		}
	}
</style>
