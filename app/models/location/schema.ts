import z from 'zod'

export interface LocationPayload {
  street_address: string
  city: string
  country: string
  postal_code: string
  extra_info?: string
}

export const LocationSchema = z.object({
  uuid: z.string(),
  extra_info: z.string().nullable(),
  street_address: z.string(),
  city: z.string(),
  country: z.string(),
  postal_code: z.string(),
  longitude: z.string(),
  latitude: z.string()
})

export type Location = z.infer<typeof LocationSchema>
