export interface Metadata {
	title: string;
	date: Date;
	description?: string;
	time?: string;
	hidden?: boolean;
}

export interface Post {
	path: string;
	metadata: Metadata;
}

export const loadPosts = async (): Promise<Post[]> => {
	const allPostFiles = import.meta.glob('../posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: Post[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const {metadata} = await resolver();
			const postPath = path.slice(2, -3);

			const post: Post = {
				metadata: metadata,
				path: postPath,
			};
			return post;
		})
	);

	return allPosts;
};

export const loadPostsOrdered = async (hidden = true): Promise<Post[]> => {
	let posts = await loadPosts();
	if (!hidden) {
		posts = posts.filter((post) => post.metadata.hidden !== true);
	}

	posts = posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return posts;
};
