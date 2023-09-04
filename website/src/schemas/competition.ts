import { z } from 'astro/zod';
import { reference, type ImageFunction, type SchemaContext } from 'astro:content';

export const CompetitionSchemaFactory = (context: SchemaContext | undefined = undefined) =>
	z.object({
		name: z.string(),
		date: z.coerce.date(),
		placement: z.string(),
		icon: z.string(),
		iconColor: z.string().default('orange'),
		highlighted: z.boolean().default(false),
		images: z
			.array(
				z.object({
					src: context?.image() ?? (z.string as unknown as ImageFunction)(),
					alt: z.string(),
					name: z.string(),
				})
			)
			.optional().default([]),
		pdfs: z
			.array(
				z.object({
					src: z.string(),
					name: z.string(),
				})
			)
			.optional().default([]),
		urls: z
			.array(
				z.object({
					href: z.string().url(),
					name: z.string(),
				})
			)
			.optional().default([]),
		team: z.array(reference('people')).optional(),
		blogPost: reference('blog').optional(),
	});

export const CompetitionSchema = CompetitionSchemaFactory();

export type CompetitionMetadata = z.infer<typeof CompetitionSchema>;
