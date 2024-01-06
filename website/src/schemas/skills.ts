import {z} from 'astro/zod';
import { reference } from 'astro:content';

export const skillsSchema = z.object({
    name: z.string(),
    icon: z.string(),
    order: z.number(),
    detailed: z.boolean().optional().default(false),
    achievements: z.array(reference('achievements')).optional().default([]),
    experience: z.array(reference('experience')).optional().default([]),
    educations: z.array(reference('educations')).optional().default([]),
    posts: z.array(reference('posts')).optional().default([]),
});

export type SkillsMetadata = z.infer<typeof skillsSchema>;