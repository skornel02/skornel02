<script context="module" lang="ts">
	export const prerender = true;

	interface SectionData {
		[key: string]: Section;
	}

	interface Section {
		index: number;
		top: number;
		title: string;
	}
</script>

<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { onMount } from 'svelte';
	import Awards from '$lib/awards/Awards.svelte';
	import { animateScroll } from 'svelte-scrollto-element';
	import {backOut, circInOut} from 'svelte/easing';

	const sections: SectionData = {};
	let height;
	let currentSection = {
		index: -1,
		top: 0,
		title: ''
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
		let index = 0;
		document.querySelectorAll('.resume-section').forEach((el) => {
			if (el.classList.contains('d-none')) return;
			sections[el.id] = {
				index: index++,
				top: document.getElementById(el.id).offsetTop,
				title: document.getElementById(el.id).getAttribute('x-description')
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
					easing: circInOut			
				})
			}
		} else if (e.key === 'ArrowRight') {
			if (currentSection.index < Object.keys(sections).length - 1) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1]),	
					duration: 250,	
					easing: circInOut			
				})
			}
		} else if (e.key === "PageUp") {
			if (currentSection.index > 0) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index - 1]),	
					duration: 0,
					easing: backOut
				})
			}
		} else if (e.key === "PageDown") {
			if (currentSection.index < Object.keys(sections).length - 1) {
				animateScroll.scrollTo({
					element: document.getElementById(Object.keys(sections)[currentSection.index + 1]),	
					duration: 0,
					easing: backOut
				})
			}
		}
	};
</script>

<svelte:window bind:scrollY={height} on:keydown={handleKeyboard} />

<svelte:head>
	<title>{currentSection.title}</title>
</svelte:head>

<div class="container-fluid p-0">
	<section class="resume-section p-3 p-lg-5 d-flex d-column" id="about" x-description="SK - Home">
		<div class="my-auto">
			<h1 class="mb-0">
				<div class="text-secondary">Stefán</div>
				<span class="text-primary">Kornél</span>
			</h1>
			<p class="mb-5">
				I am a young tinkerer that loves programming. My current goal is to start working in the
				field. Learning to bake is in progress!
			</p>
			<ul class="list-inline list-social-icons mb-0">
				<li class="list-inline-item">
					<a href="https://github.com/skornel02">
						<div class="icon">
							<FaGithub />
						</div>
					</a>
				</li>
				<li class="list-inline-item">
					<a href="https://www.facebook.com/stefankornel02">
						<div class="icon">
							<FaFacebook />
						</div>
					</a>
				</li>
				<li class="list-inline-item">
					<a href="mailto:stefankornel02@gmail.com">
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
		<div class="my-auto">
			<h2 class="mb-5">Experience</h2>

			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">Full stack developer</h3>
					<div class="subheading mb-3">ParkMyst Project</div>
					<p>
						What started out as a fun project for our trip, turned into a very serious project. The
						main goal of this project is to provide a platform for game creators where they can
						create games from building blocks (low code/no code) and a client for players to play
						these games.
					</p>
					<p>
						My role in this project was mostly backend focused, but I also took responsibility in
						creating the frontend aspect of the software too. I am very proud of this software, and
						the team I work with. Furthermore, we are very proud of the recognition we got in the
						form of
						<a href="#parkmyst">competition first place</a>.
					</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">2019 - Present</span>
				</div>
			</div>
			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">Full stack developer</h3>
					<div class="subheading mb-3">THR Logisztika</div>
					<p>
						At this company there was a need for a custom built shift scheduling system, and I got
						the chance to work on it. With no previous infrastructure it was my role to negotiate
						how the system should work, what kind of interface it should have and then delivering
						it.
					</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">2019</span>
				</div>
			</div>
			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">Backend developer</h3>
					<div class="subheading mb-3">Házizz Project</div>
					<p>
						Everyone knows the hardships of a student. You must always be on point with homework and
						assignments. To ease this burden, we created a social platform where you can share this
						information with your classmates.
					</p>
					<p>
						This was my, and my project partners’, first large-scale project. For me this was an
						invaluable experience in leadership and software architecture. My role was primarily
						working on the backend of the project and negotiating how it will communicate with
						multiple clients.
					</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">2018 - 2020</span>
				</div>
			</div>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="education"
		x-description="SK - Education"
	>
		<div class="my-auto">
			<h2 class="mb-5">Education</h2>

			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">BMSZC Neumann János Informatikai Technikum</h3>
					<div class="subheading mb-3">Vocational secondary school</div>
					<div>Programming and networking</div>
					<p>
						After an intense English year I have learned the fundemantals of the IT industry for 4
						years. While studying i also took part in a variety of IT competitions.
					</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">2017 - 2022</span>
				</div>
			</div>
			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">Budaörsi Herman Ottó</h3>
					<div class="subheading mb-3">Primary school</div>
					<div>Media production</div>
					<p>I have worked on numerous projects as a cameraman and also as a video editor.</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">2009 - 2017</span>
				</div>
			</div>
		</div>
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
				<img
					src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
					alt="typescript"
					width="40"
					height="40"
				/>
			</ul>
			<img
				class="d-block mx-auto img-fluid"
				src="https://github-readme-stats.vercel.app/api/top-langs?username=skornel02&show_icons=true&locale=en&layout=compact"
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
			<p />
			<p class="mb-0" />
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="awards"
		x-description="SK - Awards"
	>
		<div class="my-auto">
			<h2 class="mb-5">Awards &amp; Certifications</h2>
			<Awards />
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

	section.resume-section {
		border-bottom: 1px solid;
		border-color: $secondary-color;
		padding-top: 5rem !important;
		padding-bottom: 5rem !important;
	}
	section.resume-section .resume-item .resume-date {
		min-width: max-content;
	}
	@media (min-width: 768px) {
		section.resume-section {
			min-height: 100vh;
		}
		section.resume-section .resume-item .resume-date {
			min-width: 12rem;
		}
	}

	@media (min-width: 992px) {
		section.resume-section {
			padding-top: 3rem !important;
			padding-bottom: 3rem !important;
		}
	}
</style>
