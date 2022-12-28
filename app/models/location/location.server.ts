import z from 'zod'
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

export const deleteLocation = async(authToken: string, locationUuid: string) => {
  await AudiophileClient.sendRequest('delete', `locations/${locationUuid}`, { authToken })
}

export const getAllLocations = async(authToken: string) => {
  const response = await AudiophileClient.sendRequest('get', 'locations', { authToken })
  const locations = z.array(LocationSchema).parse(response)

  return locations
}
