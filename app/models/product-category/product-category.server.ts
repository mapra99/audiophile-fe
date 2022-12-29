import * as AudiophileClient from '~/utils/audiophile-client'
import { z } from "zod";
import { ProductCategorySchema } from './schema'

export const allProductCategories = async () => {
  const response = await AudiophileClient.sendRequest('get', 'product_categories')
  const categories = z.array(ProductCategorySchema).parse(response)

  return categories
}

export const allAvailableProductCategories = async () => {
  const allCategories = await allProductCategories();
  const filteredCategories = allCategories.filter(category => category.products.length > 0)

  return filteredCategories
}

export const getProductCategory = async (slug: string) => {
  const response = await AudiophileClient.sendRequest('get', `product_categories/${slug}`)
  const category = ProductCategorySchema.parse(response)

  return category
}
