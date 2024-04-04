import { defineCollection, z } from "astro:content";
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    domainName: z.string().optional(),
    usecase: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().url().optional(),
    preview: z.string().url().optional(),
  }),
});
const themes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    description: z.string().optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    techstack: z.string(),
    srcIcon: z.string(),
    usecase: z.string().optional(),
    category: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().url().optional(),
    preview: z.string().url().optional(),
  }),
});

export const collections = { 
  projects,
  themes,
 };