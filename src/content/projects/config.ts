import { defineCollection, z } from 'astro:content';

export const collections = {
  projects: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      stack: z.array(z.string()),
      tasks: z.array(z.string()),
      repository: z.string().url(),
    }),
  }),
};
