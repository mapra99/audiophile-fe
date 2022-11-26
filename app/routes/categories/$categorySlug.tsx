import { useLoaderData } from "@remix-run/react"
import { json } from '@remix-run/node'
import invariant from "tiny-invariant"
import { getProductCategory } from "~/models/product-category"
import { Heading } from '~/components'
import type { LoaderArgs } from "@remix-run/server-runtime"

export const loader = async ({ params }: LoaderArgs) => {
  const { categorySlug } = params
  invariant(categorySlug, "Category slug is required")

  try {
    const category = await getProductCategory(categorySlug)
    return json({ category })
  } catch (err) {
    throw new Response("Not Found", { status: 404 })
  }
}

export default () => {
  const { category } = useLoaderData();

  return (
    <div>
      <Heading name={category.name} />
    </div>
  )
}
