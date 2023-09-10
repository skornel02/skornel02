import {z} from 'astro/zod';
import {reference} from 'astro:content';

export const educationSchema = z.object({
	school: z.string(),
	major: z.string(),
	minor: z.string().optional(),
	duration: z.string(),
	order: z.number().int().positive(),
	blogPost: reference('posts').optional(),
});

export type EducationMetadata = z.infer<typeof educationSchema>;
