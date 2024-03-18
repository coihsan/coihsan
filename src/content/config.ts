import { defineCollection, reference, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
const Projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    heroImage: image().refine(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    pathname: z.string().optional(),
    usecase: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().url().optional(),
    preview: z.string().url().optional(),
  }),
});
const Themes = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    description: z.string().optional(),
    heroImage: image().refine(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    pathname: z.string().optional(),
    usecase: z.string().optional(),
    category: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().url().optional(),
    preview: z.string().url().optional(),
  }),
});

export const collections = { 
  Projects,
  Themes,
 };