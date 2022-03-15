<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFacebook from 'svelte-icons/fa/FaFacebook.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaTrophy from 'svelte-icons/fa/FaTrophy.svelte';
	import FaMedal from 'svelte-icons/fa/FaMedal.svelte';
	import FaCertificate from 'svelte-icons/fa/FaCertificate.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="container-fluid p-0">
	<section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
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

	<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
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

	<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
		<div class="my-auto">
			<h2 class="mb-5">Education</h2>

			<div class="resume-item d-flex flex-column flex-md-row mb-5">
				<div class="resume-content mr-auto">
					<h3 class="mb-0">School</h3>
					<div class="subheading mb-3">Level</div>
					<div>Specialization</div>
					<p>Relevant info</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary">From - To</span>
				</div>
			</div>
		</div>
	</section>

	<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
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
				class="d-block mx-auto"
				src="https://github-readme-stats.vercel.app/api/top-langs?username=skornel02&show_icons=true&locale=en&layout=compact"
				alt="skornel02"
			/>
		</div>
	</section>

	<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
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

	<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
		<div class="my-auto">
			<h2 class="mb-5">Awards &amp; Certifications</h2>
			<ul class="fa-ul mb-0">
				<li>
					<div class="icon text-warning">
						<FaTrophy />
					</div>
					Award
				</li>
				<li>
					<div class="icon text-warning">
						<FaMedal />
					</div>
					Lesser Award
				</li>
				<li>
					<div class="icon text-warning">
						<FaCertificate />
					</div>
					Certificate
				</li>
			</ul>
		</div>
	</section>
</div>

<style>
	.icon {
		display: inline-block;
		width: 32px;
		height: 32px;
	}
</style>
