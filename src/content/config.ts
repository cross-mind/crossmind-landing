import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Nova Yu'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const changelog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    version: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Nova Yu'),
    categories: z.array(z.enum(['features', 'improvements', 'fixes', 'performance', 'documentation'])).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, changelog };
