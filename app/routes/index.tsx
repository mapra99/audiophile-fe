import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Text } from '~/components'
import { allProductCategories } from "~/models/product-category"

export const loader = async () => {
  const categories = await allProductCategories();
  return json({ categories })
}

export default () => {
  const { categories } = useLoaderData<typeof loader>();

  return (
    <div>
      <Text variant="heading-1">
        All Categories
      </Text>

      <ul>
        { categories.map(category => (
          <li key={category.slug}>
            <Text variant="heading-3" as="span">
              {category.name}
            </Text>
            { category.products.length > 0 && (
              <div>
                <Text variant="heading-4">
                  Products:
                </Text>
                {category.products.map(product => (
                  <Text variant="heading-6" key={product.slug}>
                    { product.name }
                  </Text>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
