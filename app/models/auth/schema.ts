import { z } from 'zod'

export interface UserInfoPayload {
  name: string
  email: string
  phone: string
}

export interface CodeInfoPayload {
  email: string
  code: string
}

export const AccessTokenSchema = z.object({
  access_token: z.string(),
  expires_at: z.string()
})

export type AccessToken = z.infer<typeof AccessTokenSchema>;
