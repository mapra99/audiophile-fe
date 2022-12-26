import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { HomeHero, CategoriesList, BestAudioBanner, HomeProductBanners } from '~/components'
import { featuredProducts, homepageProducts } from '~/models/product'
import { allProductCategories } from '~/models/product-category'
import getRandom from '~/utils/get-random'
import trackPageView from '~/utils/track-page-view'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ request }: LoaderArgs) => {
  trackPageView(request)

  const products = await featuredProducts()
  const featuredProduct = getRandom(products)

  const categories = await allProductCategories();
  const bannerProducts = await homepageProducts();

  return json({ featuredProduct, categories, bannerProducts })
}

export default () => {
  const { featuredProduct, categories, bannerProducts } = useLoaderData<typeof loader>()

  return (
    <div>
      <HomeHero product={featuredProduct} />
      <div className="mt-10 mb-28 sm:my-24 lg:mt-30 lg:mb-40">
        <CategoriesList categories={categories} />
      </div>

      <div className="mb-28 sm:mb-24 lg:mb-48">
        <HomeProductBanners products={bannerProducts} />
      </div>

      <div className="mb-28 sm:mb-24 lg:mb-48">
        <BestAudioBanner />
      </div>
    </div>
  )
}
