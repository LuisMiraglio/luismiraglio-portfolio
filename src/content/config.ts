import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    highlight: z.string().optional(),
    tags: z.array(z.string()).default([]),
    repo: z.string().optional(),
    demo: z.string().optional(),
    video: z.string().optional(),
  }),
});

const certs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    category: z.string(),
    credentialUrl: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});




export const collections = { projects, certs };
