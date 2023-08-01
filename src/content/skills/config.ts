import { defineCollection, z } from 'astro:content';

export const collections = {
  skills: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      icon: z.string(),
    }),
  }),
};
