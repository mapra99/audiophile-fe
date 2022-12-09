import { z } from 'zod'
import * as AudiophileClient from '~/utils/audiophile-client'
import { ProductSchema } from './schema'

export const featuredProducts = async () => {
  const response = await AudiophileClient.sendRequest('get', 'products?featured=true')
  const products = z.array(ProductSchema).parse(response)

  return products
}

export const getProduct = async (slug: string) => {
  const response = await AudiophileClient.sendRequest('get', `products/${slug}`)
  const product = ProductSchema.parse(response)

  return product
}
