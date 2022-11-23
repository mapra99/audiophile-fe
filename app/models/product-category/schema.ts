import { z } from "zod";

export const ProductCategorySchema = z.object({
  name: z.string(),
  slug: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  image: z.object({
      url: z.string()
  }),
  products: z.array(z.object({
    name: z.string(),
    slug: z.string(),
    base_price: z.number(),
    featured: z.boolean(),
    created_at: z.string(),
    updated_at: z.string(),
    image: z.object({
      url: z.string()
    }),
    contents: z.object({
      featured_description: z.string().optional(),
      featured_image: z.array(z.string()).optional(),
      description: z.string(),
      features: z.string(),
      box_content: z.string(),
      preview_images: z.array(z.string())
    })
  }))
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;
