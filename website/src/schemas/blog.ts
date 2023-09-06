import {z} from 'astro/zod';

export const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.date(),
	tags: z.array(z.string()).optional().default([]),
	language: z.string().optional().default('hu'),
	proofReader: z.string().optional(),
	hidden: z.boolean().optional().default(false),
});

export type BlogMetadata = z.infer<typeof blogSchema>;
