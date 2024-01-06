import {defineCollection} from 'astro:content';
import {postSchema} from '../schemas/posts';
import {achievementSchema, achievementSchemaFactory} from '../schemas/achievements';
import {experienceSchema} from '../schemas/experience';
import {educationSchema} from '../schemas/education';
import {peopleSchemaFactory} from '../schemas/people';
import { skillsSchema } from '../schemas/skills';

const posts = defineCollection({
	type: 'content',
	schema: postSchema,
});

const achievements = defineCollection({
	type: 'data',
	schema: achievementSchemaFactory,
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

const skills = defineCollection({
	type: 'content',
	schema: skillsSchema,
});

export const collections = {
	posts,
	achievements,
	experience,
	education,
	people,
	skills,
};
