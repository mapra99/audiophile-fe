import { z } from 'zod'

export const SessionSchema = z.object({
  uuid: z.string()
})

export type Session = z.infer<typeof SessionSchema>;
