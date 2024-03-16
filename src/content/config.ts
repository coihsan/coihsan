import { defineCollection, reference, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
const FrontmatterSchema = z.object({
  estReadingTime: z.any(),
});
const blog = defineCollection({
  // type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    logo: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    heroImage: image().refine(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    pathname: z.string().optional(),
    usecase: z.string().optional(),
    frontmatter: FrontmatterSchema.optional(),
    canonicalURL: z.string().url().optional(),
  }),
});

export const collections = { blog };