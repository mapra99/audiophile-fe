import * as AudiophileClient from '~/utils/audiophile-client'
import { PaymentSchema } from './schema'

export const startPayment = async (authToken: string, cartUuid: string) => {
  const response = await AudiophileClient.sendRequest('post', 'payments', {
    authToken,
    body: { purchase_cart_uuid: cartUuid }
  })

  const payment = PaymentSchema.parse(response)
  return payment
}

export const getPayment = async (authToken: string, uuid: string) => {
  const response = await AudiophileClient.sendRequest('get', `payments/${uuid}`, { authToken })

  const payment = PaymentSchema.parse(response)
  return payment
}
