import { defineCollection, reference, z } from "astro:content";
import { rssSchema } from "@astrojs/rss";
const FrontmatterSchema = z.object({
  estReadingTime: z.any(),
});
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
    frontmatter: FrontmatterSchema.optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().optional(),
    preview: z.string().optional(),
  }),
});
const Themes = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    heroImage: image().refine(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    pathname: z.string().optional(),
    usecase: z.string().optional(),
    frontmatter: FrontmatterSchema.optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().optional(),
    preview: z.string().optional(),
  }),
});

export const collections = { 
  'projects': Projects,
  'themes': Themes,
 };