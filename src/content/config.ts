import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    lang: z.enum(['en', 'es']),
    enSlug: z.string().optional(),
    esSlug: z.string().optional(),
  }),
});

export const collections = {
  posts,
};










