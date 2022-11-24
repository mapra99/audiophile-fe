import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { HomeHero } from '~/components'
import { featuredProducts } from '~/models/product'
import getRandom from '~/utils/get-random'

export const loader = async () => {
  const products = await featuredProducts()
  const featuredProduct = getRandom(products)
  return json({ featuredProduct })
}

export default () => {
  const { featuredProduct } = useLoaderData()

  return (
    <div>
      <HomeHero product={featuredProduct} />
    </div>
  )
}
