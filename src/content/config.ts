import { defineCollection, reference, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
const FrontmatterSchema = z.object({
  estReadingTime: z.any(),
});
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    heroImage: z
      .object({
        src: z.string().default(""),
        alt: z.string().default(""),
      })
      .optional(),
    techstack: z.string(),
    pathname: z.string().optional(),
    usecase: z.string().optional(),
    frontmatter: FrontmatterSchema.optional(),
    canonicalURL: z.string().url().optional(),
  }),
});

export const collections = { blog };