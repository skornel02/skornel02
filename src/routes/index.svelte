<script context="module" lang="ts">
	export const prerender = true;

	interface HeightData {
		[key: string]: {
			top: number;
			title: string;
		};
	}
</script>

<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte';
	import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
	import FaCertificate from 'svelte-icons/fa/FaCertificate.svelte';
	import FaFile from 'svelte-icons/fa/FaFile.svelte';
	import FaGlobe from 'svelte-icons/fa/FaGlobe.svelte';
	import { onMount } from 'svelte';
	import Award from '$lib/Award.svelte';
	const heights: HeightData = {};

	let height;
	let title = 'Home';
	$: {
		if (Object.keys(heights).length > 0) {
			let maxI = 0;
			for (let i = 1; i < Object.keys(heights).length; i++) {
				const key = Object.keys(heights)[i];
				const value = heights[key];
				if (height > value.top) {
					maxI = i;
				}
			}
			title = heights[Object.keys(heights)[maxI]].title;
		}
	}

	onMount(() => {
		document.querySelectorAll('.resume-section').forEach((el) => {
			heights[el.id] = {
				top: document.getElementById(el.id).offsetTop,
				title: document.getElementById(el.id).getAttribute('x-description')
			};
		});
		const top = heights['about'].top ?? 0;

		Object.keys(heights).forEach((key) => {
			heights[key].top = heights[key].top - top;
		});
	});
</script>

<svelte:window bind:scrollY={height} />

<svelte:head>
	<title>{title}</title>
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
					<h3 class="mb-0">Title</h3>
					<div class="subheading mb-3">At</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel dapibus eros. Donec
						faucibus augue vel arcu fermentum, ut consequat nulla ullamcorper. Mauris molestie vitae
						odio at faucibus. Integer posuere diam velit, vel sodales mi placerat ac. Nunc eu
						feugiat mauris. Mauris ligula metus, consequat id imperdiet ut, accumsan et justo.
						Curabitur molestie erat lectus, ut tristique urna mollis sed. Mauris vestibulum enim ac
						magna molestie, fermentum egestas massa euismod. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Fusce in augue a est congue congue eget vitae felis.
					</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">From - Present</span>
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
				alt="skornel02"
			/>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="interests"
		x-description="SK - Interests"
	>
		<div class="my-auto">
			<h2 class="mb-5">Interests</h2>
			<p>
				Cras posuere ante ac diam vehicula porta. Suspendisse bibendum erat sed mauris feugiat, quis
				auctor justo convallis. Ut tristique odio non eros euismod bibendum. Aliquam iaculis, quam
				et malesuada feugiat, nulla nulla dapibus diam, et laoreet massa dolor sit amet tellus.
				Morbi tempus elit eu elit porttitor, ac ultrices risus accumsan. Ut maximus eros sit amet
				diam aliquam, eu porta purus consectetur. Pellentesque vel arcu vel libero luctus tincidunt.
				Praesent vitae turpis eget metus consectetur placerat. Vivamus ac turpis lacus. Donec tellus
				ante, molestie quis sapien non, pretium ornare felis. Aliquam nisi enim, imperdiet eget
				aliquam sit amet, porttitor sed metus. Nam ultricies ligula eu magna auctor posuere.
			</p>
			<p class="mb-0">
				Suspendisse potenti. Nam porttitor sed lacus et dapibus. Aliquam quam mi, feugiat ut
				sagittis non, tempor et est. Praesent facilisis at massa sed iaculis. Curabitur aliquam
				lacinia sapien ac fermentum. Quisque condimentum diam at dui consequat, sed commodo orci
				ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
				cubilia curae; Quisque sed enim tempor, commodo erat eu, sodales est. Sed lobortis
				sollicitudin turpis, ac tincidunt odio dapibus nec. Suspendisse id enim tincidunt, hendrerit
				lorem sit amet, rhoncus ligula. Morbi porta ac lectus et mollis.
			</p>
		</div>
	</section>

	<section
		class="resume-section p-3 p-lg-5 d-flex flex-column"
		id="awards"
		x-description="SK - Awards"
	>
		<div class="my-auto">
			<h2 class="mb-5">Awards &amp; Certifications</h2>
			<ul class="list-group">


				<!--2022-->


				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Ifjútudosok tudományos vetélkedő - 2022 - Traditional category
						</div>
						<a href="assets/Ifjú tudósok 2022.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>


				<!--2021-->


				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Dusza Árpád Országos Programozói Emlékverseny - 2021 - Mobile category
						</div>
						<a href="assets/Dusza mobil 2021.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Bakonyi Bitfaragó Bajnokság - 2021</div>
						<a href="assets/Bakonyi Bitfaragó Bajnokság 2021.jpg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">30. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny</div>
						<a href="assets/Innovációs tehetségkutató 2021.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaCertificate slot="icon" />
					<svelte:fragment slot="badge">Certificate</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">CCNA Routing and Switching: Introduction to Networking</div>
						<a href="assets/CCNA-1-certificate.pdf" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Kódolj Határok Nélkül! - 2021</div>
						<a href="assets/Kódolj Határok Nélkül 2021.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">II. Merklik László problémamegoldó verseny</div>
						<a href="assets/Merklik 2021.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Bakonyi Bitfaragó Bajnokság - 2020</div>
						<a href="assets/Bakonyi Bitfaragó Bajnokság 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">II. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Neumann János Egyetem Programming contest - 2020</div>
						<a href="assets/GAMF programozó verseny 2020.pdf" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">II. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">WebGraf - 2020</div>
					</svelte:fragment>
				</Award>

				
				<!--2020-->


				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Dusza Árpád Országos Programozói Emlékverseny - 2020 - Mobile category
						</div>
						<a href="assets/Dusza mobil 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Szegedi Innovatív Informatika Verseny - 2020 - Software category
						</div>
						<a href="assets/SZIIV 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
						<a
							href="https://www.inf.u-szeged.hu/sziiv2020/eredmenyek#:~:text=hazizz%20velunk%3A%20parkmyst"
							target="_blank"
							rel="noopener"
						>
							<div class="file">
								<FaGlobe />
							</div>
							Website
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Kódolj Határok Nélkül! - 2020</div>
						<a href="assets/Kódolj Határok Nélkül 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Accenture Java competition - 2020</div>
						<a href="assets/Accenture Java 2020.pdf" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">29. Ifjúsági Tudományos és Innovációs Tehetségkutató Verseny</div>
						<a href="assets/Innovációs tehetségkutató 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">39. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2020 - Programming category
						</div>
						<a href="assets/Nemes Tihamér 2020.pdf" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">II. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Dusza Árpád Országos Programozói Emlékverseny - 2020 - Traditional category
						</div>
						<a href="assets/Dusza 2020.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>


				<!--2019-->


				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Dusza Árpád Országos Programozói Emlékverseny - 2019 - Mobile category
						</div>
						<a href="assets/Dusza Mobil 2019.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">Finalist</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Bakonyi Bitfaragó Bajnokság - 2019</div>
						<a href="assets/Bakonyi Bitfaragó Bajnokság 2019.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">Http Alapítvány - Cisco Webex Hacathlon - 2019</div>
						<a href="assets/Webex Teams Hackathlon 2019 photo.jpg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Szegedi Innovatív Informatika Verseny - 2019 - Software category
						</div>
						<a href="assets/SZIIV 2019.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
						<a
							href="https://www.inf.u-szeged.hu/sziiv2019/eredmenyek#:~:text=hazizz%20velunk"
							target="_blank"
							rel="noopener"
						>
							<div class="file">
								<FaGlobe />
							</div>
							Website
						</a>
					</svelte:fragment>
				</Award>				
				<Award>
					<FaMedal slot="icon" />
					<svelte:fragment slot="badge">41. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Nemes Tihamér Nemzetközi Informatikai Tanulmányi Verseny - 2019 - Programming category
						</div>
						<a href="assets/Nemes Tihamér 2019.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Dusza Árpád Országos Programozói Emlékverseny - 2019 - Traditional category
						</div>
						<a href="assets/Dusza 2019.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>


				<!--2018-->

				
				<Award>
					<FaTrophy slot="icon" />
					<svelte:fragment slot="badge">I. place</svelte:fragment>
					<svelte:fragment slot="content">
						<div class="fw-bold">
							Secondary School Programming contest - 2018
						</div>
						<a href="assets/Iskola programozás verseny 2018.jpeg" target="_blank" rel="noopener">
							<div class="file">
								<FaFile />
							</div>
							Reference
						</a>
					</svelte:fragment>
				</Award>


				<!--2017-->


			</ul>
		</div>
	</section>
</div>

<style lang="scss">
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
	}

	.file {
		display: inline-block;
		width: 16px;
		height: 16px;
	}

	section.resume-section {
		border-bottom: 1px solid;
		border-color: $secondary-color;
		padding-top: 5rem !important;
		padding-bottom: 5rem !important;
	}
	section.resume-section .resume-item .resume-date {
		min-width: none;
	}
	@media (min-width: 768px) {
		section.resume-section {
			min-height: 100vh;
		}
		section.resume-section .resume-item .resume-date {
			min-width: 18rem;
		}
	}

	@media (min-width: 992px) {
		section.resume-section {
			padding-top: 3rem !important;
			padding-bottom: 3rem !important;
		}
	}
</style>
