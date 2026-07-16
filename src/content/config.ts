import { defineCollection, z } from "astro:content";

const certs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    category: z.string(),
    credentialUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    category: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    year: z.number(),
    role: z.array(z.string()),
    stack: z.array(z.string()),
    impact: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    repositoryUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    privateRepository: z.boolean().default(false),
    company: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { certs, projects };
