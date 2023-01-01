import z from 'zod'

export const PaymentSchema = z.object({
  uuid: z.string(),
  status: z.string(),
  amount: z.number(),
  purchase_cart: z.object({
    uuid: z.string()
  }),
  client_secret: z.string().optional()
})

export type Payment = z.infer<typeof PaymentSchema>
