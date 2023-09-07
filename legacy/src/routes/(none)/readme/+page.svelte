<script lang="ts">
	import type { PageData } from "./$types";
	import 'github-markdown-css/github-markdown.css';

    export let data: PageData; 
</script>

<main class="markdown-body">
    {@html data.markDown}
</main>

<style>
    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 1rem;
    }
</style>