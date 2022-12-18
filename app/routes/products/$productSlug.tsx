import invariant from 'tiny-invariant'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getProduct, getProductStocks } from '~/models/product'
import { allProductCategories } from '~/models/product-category'
import { ProductHeading, ProductFeatures, ProductGallery, CategoriesList, BestAudioBanner } from '~/components'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ params }: LoaderArgs) => {
  const { productSlug } = params
  invariant(productSlug, "Product slug is required")

  let product
  try {
    product = await getProduct(productSlug)
  } catch (err) {
    throw new Response("Not Found", { status: 404 })
  }

  const stocks = await getProductStocks(productSlug)
  const categories = await allProductCategories()

  return json({ product, categories, stocks })
}

export default () => {
  const { product, categories, stocks } = useLoaderData<typeof loader>()

  const goBack = () => history.back()

  return (
    <div>
      <div className="pt-4 pb-6 px-6 sm:pt-8 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <button onClick={goBack} className="text-base text-black opacity-50 hover:opacity-100 transition">
            Go Back
          </button>
        </div>
      </div>

      <div className="px-6 sm:px-10 mb-20 sm:mb-28 lg:mb-40">
        <ProductHeading product={product} stocks={stocks} />
      </div>

      <div className="px-6 sm:px-10 mb-20 sm:mb-28 lg:mb-40">
        <ProductFeatures product={product} />
      </div>

      <div className="px-6 sm:px-10 mb-20 sm:mb-28 lg:mb-40">
        <ProductGallery product={product} />
      </div>

      <div className="mb-20 sm:mb-28 lg:mb-40">
        <CategoriesList categories={categories} />
      </div>

      <div className="mb-28 lg:mb-40">
        <BestAudioBanner />
      </div>
    </div>
  )
}
