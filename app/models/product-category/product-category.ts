import * as AudiophileClient from '~/utils/audiophile-client'

export const allProductCategories = async () => {
  const categories = await AudiophileClient.sendRequest('get', 'product_categories')
}
