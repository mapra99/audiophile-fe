import { z } from 'zod'

export type PurchaseCartStatus = 'started' | 'paid' | 'canceled'

export const PurchaseCartItemSchema = z.object({
  uuid: z.string(),
  quantity: z.number(),
  unit_price: z.number(),
  price: z.number(),
  stock: z.object({
    uuid: z.string(),
    quantity: z.number(),
    product: z.object({
      name: z.string(),
      slug: z.string(),
      image: z.object({
        url: z.string()
      }).optional()
    })
  })
})

export type PurchaseCartItem = z.infer<typeof PurchaseCartItemSchema>;

export const PurchaseCartSchema = z.object({
  uuid: z.string(),
  total_price: z.number(),
  status: z.enum(['started', 'paid', 'canceled']),
  user_location_uuid: z.string().nullable(),
  items: z.array(PurchaseCartItemSchema),
  extra_fees: z.array(z.object({
    key: z.string(),
    price: z.number()
  }))
})

export type PurchaseCart = z.infer<typeof PurchaseCartSchema>;

export interface PurchaseCartItemPayload {
  stock_uuid: string
  quantity: number
}
