import * as AudiophileClient from '~/utils/audiophile-client'
import { SessionSchema } from './schema'

export const createSession = async () => {
  const response = await AudiophileClient.sendRequest('post', 'sessions')
  const session = SessionSchema.parse(response)

  return session
}
