import { z } from 'zod'
import * as AudiophileClient from '~/utils/audiophile-client'

import { ProductStockSchema } from './schema'

export const getProductStocks = async(productSlug: string) => {
  const response = await AudiophileClient.sendRequest('get', `products/${productSlug}/stocks`)
  const stocks = z.array(ProductStockSchema).parse(response)

  return stocks
}
