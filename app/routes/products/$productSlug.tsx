import invariant from 'tiny-invariant'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getProduct } from '~/models/product'
import { ProductHeading } from '~/components'

import type { LoaderArgs } from '@remix-run/node'

export const loader = async ({ params }: LoaderArgs) => {
  const { productSlug } = params
  invariant(productSlug, "Product slug is required")

  try {
    const product = await getProduct(productSlug)
    return json({ product })
  } catch (err) {
    throw new Response("Not Found", { status: 404 })
  }
}

export default () => {
  const { product } = useLoaderData<typeof loader>()

  const goBack = () => history.back()

  return (
    <div>
      <div className="max-w-6xl mx-auto pt-4 pb-6 px-6 sm:pt-8 sm:px-10">
        <button onClick={goBack} className="text-base text-black opacity-50 hover:opacity-100 transition">
          Go Back
        </button>
      </div>

      <div className="mb-20 sm:mb-28 lg:mb-40">
        <ProductHeading product={product} />
      </div>
    </div>
  )
}
