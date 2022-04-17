<script>
	import face from '$static/assets/face.jpg?width=160&srcset';
	import faceWebP from '$static/assets/face.jpg?width=160&format=webp&srcset';
</script>

<picture>
	<source srcset={faceWebP} type="image/webp" width="160" height="160" />
	<source srcset={face} type="image/jpeg" width="160" height="160" />
	<img
		class="img-fluid img-profile rounded-circle mx-auto mb-2"
		src="/assets/face.jpg"
		height="160"
		width="160"
		alt="SK"
	/>
</picture>
