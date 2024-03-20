import { defineCollection, z } from "astro:content";
const Projects = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    heroImage: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    // heroImage: image(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    domainName: z.string().optional(),
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
    heroImage: image(),
    heroImageAlt: z.string(),
    techstack: z.string(),
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