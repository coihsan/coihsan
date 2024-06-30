import { defineCollection, z } from "astro:content";
const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    logo: z.string().optional(),
    logoAlt: z.string().optional(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    techstack: z.string().optional(),
    domainName: z.string().optional(),
    usecase: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    source: z.string().url().optional(),
    preview: z.string().url().optional(),
  }),
});

export const collections = { 
  projects,
 };