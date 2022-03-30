<script lang="ts" context="module">
	export const prerender = true;
    
	export interface Metadata {
		title: string;
		date: Date;
        description?: string;
        time?: string;
	}

	export interface Post {
		path: string;
		metadata: Metadata;
	}

	export const load = async () => {
		const allPostFiles = import.meta.glob('../posts/*.md');
		const iterablePostFiles = Object.entries(allPostFiles);

		const allPosts: Post[] = await Promise.all(
			iterablePostFiles.map(async ([path, resolver]) => {
				const { metadata } = await resolver();
				const postPath = path.slice(2, -3);

				const post: Post = {
					metadata: metadata,
					path: postPath
				};
				return post;
			})
		);

		const sortedPosts = allPosts.sort((a, b) => {
			return +new Date(b.metadata.date) - +new Date(a.metadata.date);
		});

		return {
			status: 200,
			props: {
				posts: sortedPosts
			}
		};
	};
</script>

<script lang="ts">
	export let posts: Post[];
</script>

<div class="container">
	<div class="column">
		<div class="row">
			{#each posts as post}
				<div class="col-12 col-md-6 col-xl-4">
					<div class="card w-100">
						<div class="card-body">
							<h5 class="card-title">{post.metadata.title}</h5>
							<p class="card-text">
								{post.metadata.description ?? "No description"}
							</p>
							<a href={post.path} class="btn btn-outline-primary">Read</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
