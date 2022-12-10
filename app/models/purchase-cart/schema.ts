import { z } from 'zod'

export type PurchaseCartStatus = 'started' | 'paid' | 'canceled'

export const PurchaseCartSchema = z.object({
  uuid: z.string(),
  total_price: z.number(),
  status: z.enum(['started', 'paid', 'canceled']),
  user_location_uuid: z.string().optional(),
  items: z.array(z.object({
    uuid: z.string(),
    stock_uuid: z.string(),
    quantity: z.number(),
    unit_price: z.number(),
    price: z.number()
  })),
  extra_fees: z.array(z.object({
    key: z.string(),
    price: z.number()
  }))
})

export type PurchaseCart = z.infer<typeof PurchaseCartSchema>;
