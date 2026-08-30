import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./.blog/posts",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishAt: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional().or(z.string().optional()),
      coverAlt: z.string().optional(),
      author: z.string().optional(),
    }),
});

export const collections = { blog };
