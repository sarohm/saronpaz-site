import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    section: z.enum(['experiences', 'experiments', 'expeditions', 'introspection', 'other']),
    order: z.number().default(999),
    category: z.string().default(''),
    experiences: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    client: z.string().default(''),
    year: z.string().default(''),
    thumb: z.string().default(''),
    header: z.string().default(''),
    headerPosition: z.string().default('center'), // which part of the banner image to show, e.g. 'center 20%'
    videos: z.array(z.string()).default([]),
    gallery: z.array(z.string()).default([]),
    hidden: z.boolean().default(false),
  }),
});

// Services ("What'sWhat") and ideas pages in src/content/pages/
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['service', 'idea']),
    order: z.number().default(0),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, pages };
