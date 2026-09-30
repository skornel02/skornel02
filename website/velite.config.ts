import path from 'node:path';
import { defineConfig, s } from 'velite';

const cleanImagePath = (val: string): string => {
  if (!val) return val;
  return val.replace(/^\/src\/images\//, '/images/');
};

const getSlug = (filePath: unknown): string => {
  if (typeof filePath !== 'string') return '';
  return path.basename(filePath, path.extname(filePath));
};

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    clean: true,
  },
  markdown: {
    copyLinkedFiles: false,
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.md',
      schema: s
        .object({
          title: s.string(),
          description: s.string(),
          date: s.isodate(),
          tags: s.array(s.string()).default([]),
          skills: s.array(s.string()).default([]),
          language: s.string().default('hu'),
          proofReader: s.string().optional(),
          hidden: s.boolean().default(false),
          content: s.markdown(),
          metadata: s.metadata(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    achievements: {
      name: 'Achievement',
      pattern: 'achievements/**/*.md',
      schema: s
        .object({
          name: s.string(),
          date: s.isodate(),
          placement: s.string(),
          icon: s.string(),
          iconColor: s.string().default('orange'),
          highlighted: s.boolean().default(false),
          skills: s.array(s.string()).default([]),
          images: s
            .array(
              s.object({
                src: s.string().transform(cleanImagePath),
                alt: s.string(),
                name: s.string(),
                icon: s.string().default('mdi:file-image-box'),
                buttonClass: s.string().default('btn btn-sm btn-primary text-white'),
              })
            )
            .default([]),
          pdfs: s
            .array(
              s.object({
                src: s.string(),
                name: s.string(),
                icon: s.string().default('mdi:file-pdf'),
                buttonClass: s.string().default('btn btn-sm btn-primary text-white'),
              })
            )
            .default([]),
          urls: s
            .array(
              s.object({
                href: s.string().url(),
                name: s.string(),
                icon: s.string().default('mdi:link-variant'),
                buttonClass: s.string().default('btn btn-sm btn-secondary text-white'),
              })
            )
            .default([]),
          team: s.array(s.string()).optional(),
          blogPost: s.string().optional(),
          coverImage: s
            .object({
              src: s.string().transform(cleanImagePath),
              alt: s.string(),
              name: s.string().optional(),
            })
            .optional(),
          content: s.markdown(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    experience: {
      name: 'Experience',
      pattern: 'experience/**/*.md',
      schema: s
        .object({
          name: s.string(),
          role: s.string(),
          duration: s.string(),
          order: s.number(),
          blogPost: s.string().optional(),
          skills: s.array(s.string()).default([]),
          content: s.markdown(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    projects: {
      name: 'Project',
      pattern: 'projects/**/*.md',
      schema: s
        .object({
          name: s.string(),
          role: s.string(),
          duration: s.string(),
          order: s.number(),
          blogPost: s.string().optional(),
          skills: s.array(s.string()).default([]),
          content: s.markdown(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    education: {
      name: 'Education',
      pattern: 'education/**/*.md',
      schema: s
        .object({
          school: s.string(),
          major: s.string(),
          minor: s.string().optional(),
          duration: s.string(),
          order: s.number(),
          blogPost: s.string().optional(),
          skills: s.array(s.string()).default([]),
          content: s.markdown(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    people: {
      name: 'Person',
      pattern: 'people/**/*.json',
      schema: s
        .object({
          $schema: s.string().optional(),
          name: s.string(),
          refer: s.string().optional(),
          image: s.string().optional().transform((v) => (v ? cleanImagePath(v) : undefined)),
          externalImage: s.string().optional(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
    skills: {
      name: 'Skill',
      pattern: 'skills/**/*.md',
      schema: s
        .object({
          name: s.string(),
          icon: s.string(),
          order: s.number(),
          detailed: s.boolean().default(false),
          content: s.markdown(),
        })
        .transform((data, { meta }) => ({
          ...data,
          slug: getSlug(meta.path),
        })),
    },
  },
});
