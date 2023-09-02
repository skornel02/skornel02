import type { SvelteComponent } from "svelte";
import { z } from 'zod';
import { generateErrorMessage } from "zod-error";

enum Language {
	English = "en",
	Hungarian = "hu",
}

const MetadataSchema = z.object({
	title: z.string({ required_error: "Title is required" }),
	date: z.string({ required_error: "Date is required" })
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be formatted: YYYY-MM-DD"),
	time: z.string()
		.regex(/^\d{2}:\d{2}:\d{2}$/, "Time must be formatted: HH:MM:SS"),
	description: z.string()
		.optional(),
	tags: z.array(z.string()),
	language: z.enum([Language.English, Language.Hungarian]),
	hidden: z.boolean()
		.default(false),
	proofReader: z.string()
		.optional(),
});

export type Metadata = z.infer<typeof MetadataSchema>;

export type Post = {
	path: string;
	metadata: Metadata;
}

const loadMetadata = (metadata: Record<string, unknown>): Metadata => {
	return MetadataSchema.parse(metadata);
};

export const loadPosts = async (): Promise<Post[]> => {
	const allPostFiles = import.meta.glob<{ default: SvelteComponent, metadata: Record<string, unknown> }>('../posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts: Post[] = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(2, -3);
			let processedMetadata;
			try {
				processedMetadata = loadMetadata(metadata);
			} catch (ex) {
				if (ex instanceof z.ZodError) {
					const errorMessage = `Error loading metadata for post ${postPath} reason: ${generateErrorMessage(ex.issues)}`
					console.error(errorMessage);
					throw new Error(errorMessage);
				}
				throw ex;
			}

			const post: Post = {
				metadata: processedMetadata,
				path: postPath,
			};
			return post;
		})
	);

	return allPosts;
};

export const orderPosts = async (posts: Post[], hidden = true): Promise<Post[]> => {
	if (!hidden) {
		posts = posts.filter((post) => post.metadata.hidden !== true);
	}

	posts = posts.sort((a, b) => {
		return +new Date(b.metadata.date) - +new Date(a.metadata.date);
	});

	return posts;
};
