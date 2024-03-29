import {z} from 'astro/zod';
import {type ImageFunction, type SchemaContext} from 'astro:content';

export const peopleSchemaFactory = (context: SchemaContext | undefined = undefined) =>
	z.object({
		name: z.string(),
		refer: z.string().url().optional(),
		image: context?.image().optional() ?? (z.string as unknown as ImageFunction)(),
		externalImage: z.string().url().optional(),
	});

export const PeopleSchema = peopleSchemaFactory();

export type PeopleMetadata = z.infer<typeof PeopleSchema>;
