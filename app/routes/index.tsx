import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { HomeHero, CategoriesList, BestAudioBanner } from '~/components'
import { featuredProducts } from '~/models/product'
import { allProductCategories } from '~/models/product-category'
import getRandom from '~/utils/get-random'

export const loader = async () => {
  const products = await featuredProducts()
  const featuredProduct = getRandom(products)

  const categories = await allProductCategories();
  return json({ featuredProduct, categories })
}

export default () => {
  const { featuredProduct, categories } = useLoaderData<typeof loader>()

  return (
    <div>
      <HomeHero product={featuredProduct} />
      <div className="mt-10 mb-30 sm:my-24 lg:mt-30 lg:mb-40">
        <CategoriesList categories={categories} />
      </div>

      <div className="mb-30 sm:mb-24 lg:mb-48">
        <BestAudioBanner />
      </div>
    </div>
  )
}
