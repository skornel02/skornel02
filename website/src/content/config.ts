import {defineCollection} from 'astro:content';
import {BlogSchema} from '../schemas/blog';
import {CompetitionSchema, CompetitionSchemaFactory} from '../schemas/competition';

const blog = defineCollection({
	type: 'content',
	schema: BlogSchema,
});

const competitions = defineCollection({
	type: 'data',
	schema: CompetitionSchemaFactory,
});

export const collections = {
	blog,
	competitions,
};
