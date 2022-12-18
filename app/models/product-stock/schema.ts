import { z } from 'zod'

export const ProductStockSchema = z.object({
  uuid: z.string(),
  quantity: z.number(),
  price: z.number()
})

export type ProductStock = z.infer<typeof ProductStockSchema>;
