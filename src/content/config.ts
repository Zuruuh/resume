import { defineCollection, z } from 'astro:content';

export const collections = {
  skills: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        icon: image(),
        index: z.number().positive(),
      }),
  }),
  projects: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        stack: z.array(z.object({ name: z.string(), icon: image() })),
        tasks: z.array(z.string()),
        repository: z.string().url(),
      }),
  }),
  educations: defineCollection({
    type: 'data',
    schema: z.object({
      organization: z.string(),
      label: z.string(),
      start_date: z.coerce.date(),
      end_date: z.coerce.date().optional(),
      tasks: z.array(z.string()),
    }),
  }),
  experiences: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        logo: image(),
        position: z.string(),
        start_date: z.coerce.date(),
        end_date: z.coerce.date().optional(),
        stack: z.array(z.object({ name: z.string(), icon: image() })),
      }),
  }),
};
