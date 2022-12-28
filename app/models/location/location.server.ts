import * as AudiophileClient from '~/utils/audiophile-client'
import { LocationSchema } from './schema'

import type { LocationPayload } from './schema'

export const createLocation = async (authToken: string, locationPayload: LocationPayload) => {
  const response = await AudiophileClient.sendRequest('post', 'locations', {
    authToken,
    body: locationPayload
  })

  const location = LocationSchema.parse(response)
  return location
}

export const getLocation = async(authToken: string, locationUuid: string) => {
  const response = await AudiophileClient.sendRequest('get', `locations/${locationUuid}`, { authToken })

  const location = LocationSchema.parse(response)
  return location
}
