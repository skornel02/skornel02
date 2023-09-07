import {defineCollection} from 'astro:content';
import {blogSchema} from '../schemas/blog';
import {competitionSchema, competitionSchemaFactory} from '../schemas/competition';
import {experienceSchema} from '../schemas/experience';
import {educationSchema} from '../schemas/education';
import {peopleSchemaFactory} from '../schemas/people';

const blog = defineCollection({
	type: 'content',
	schema: blogSchema,
});

const competitions = defineCollection({
	type: 'data',
	schema: competitionSchemaFactory,
});

const experience = defineCollection({
	type: 'content',
	schema: experienceSchema,
});

const education = defineCollection({
	type: 'content',
	schema: educationSchema,
});

const people = defineCollection({
	type: 'data',
	schema: peopleSchemaFactory,
});

export const collections = {
	blog,
	competitions,
	experience,
	education,
	people,
};
