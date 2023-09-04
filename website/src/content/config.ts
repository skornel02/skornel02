import {defineCollection} from 'astro:content';
import {BlogSchema} from '../schemas/blog';
import {CompetitionSchema, CompetitionSchemaFactory} from '../schemas/competition';
import { ExperienceSchema } from '../schemas/experience';
import { EducationSchema } from '../schemas/education';
import { PeopleSchemaFactory } from '../schemas/people';

const blog = defineCollection({
	type: 'content',
	schema: BlogSchema,
});

const competitions = defineCollection({
	type: 'data',
	schema: CompetitionSchemaFactory,
});

const experience = defineCollection({
	type: 'content',
	schema: ExperienceSchema,
});

const education = defineCollection({
	type: 'content',
	schema: EducationSchema,
});

const people = defineCollection({
	type: 'data',
	schema: PeopleSchemaFactory,
});

export const collections = {
	blog,
	competitions,
	experience,
	education,
	people,
};
