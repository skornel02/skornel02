import { z } from 'astro/zod';
import { reference, type ImageFunction, type SchemaContext } from 'astro:content';
import { zodToJsonSchema } from "zod-to-json-schema";

const imageLinkSchemaFactory = (context: SchemaContext | undefined = undefined) => z.object({
	src: context?.image() ?? (z.string as unknown as ImageFunction)(),
	alt: z.string(),
	name: z.string(),
	icon: z.string().default('mdi:file-image-box'),
	buttonClass: z.string().default('btn btn-sm btn-primary text-white'),
});

const urlLinkSchema = z.object({
	href: z.string().url(),
	name: z.string(),
	icon: z.string().default('mdi:link-variant'),
	buttonClass: z.string().default('btn btn-sm btn-secondary text-white'),
});

const pdfLinkScbema = z.object({
	src: z.string(),
	name: z.string(),
	icon: z.string().default('mdi:file-pdf'),
	buttonClass: z.string().default('btn btn-sm btn-primary text-white'),
});

export const competitionSchemaFactory = (context: SchemaContext | undefined = undefined) =>
	z.object({
		name: z.string(),
		date: z.coerce.date(),
		placement: z.string(),
		icon: z.string(),
		iconColor: z.string().default('orange'),
		highlighted: z.boolean().default(false),
		images: z
			.array(imageLinkSchemaFactory(context))
			.optional().default([]),
		pdfs: z
			.array(pdfLinkScbema)
			.optional().default([]),
		urls: z
			.array(urlLinkSchema)
			.optional().default([]),
		team: z.array(reference('people')).optional(),
		blogPost: reference('blog').optional(),
	})
		.describe("Competition schema");

const imageLinkSchema = imageLinkSchemaFactory();
export const competitionSchema = competitionSchemaFactory();

export type ImageLink = z.infer<typeof imageLinkSchema>;
export type UrlLink = z.infer<typeof urlLinkSchema>;
export type PdfLink = z.infer<typeof pdfLinkScbema>;
export type CompetitionMetadata = z.infer<typeof competitionSchema>;

// @ts-expect-error
export const competitionJsonSchema = zodToJsonSchema(competitionSchema, "competitionSchema");
console.log(JSON.stringify(competitionJsonSchema));
