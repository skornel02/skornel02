import { z } from 'astro/zod';
import { reference } from 'astro:content';

export const experienceSchema = z.object({
	name: z.string(),
	role: z.string(),
	duration: z.string(),
	order: z.number().int().positive(),
	blogPost: reference('blog').optional(),
});

export type ExperienceMetadata = z.infer<typeof experienceSchema>;
