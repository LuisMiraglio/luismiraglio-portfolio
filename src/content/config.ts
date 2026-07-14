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
    image: z.string().optional(),
  }),
});




export const collections = { certs };
