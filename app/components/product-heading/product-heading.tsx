import { ProductImage, Text, QuantityInput, Button } from '~/components'
import formatCurrency from '~/utils/format-currency'

import type { ProductHeadingpProps } from "./types"

const ProductHeading = ({ product }: ProductHeadingpProps) => {
  const { name, image, featured, base_price, contents: { description } } = product

  const formattedPrice = formatCurrency(base_price)

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 flex flex-col gap-8 sm:flex-row sm:px-10 sm:gap-16 sm:items-center lg:gap-32">
      <div className="sm:flex-1">
        <ProductImage url={image.url} name={name} />
      </div>

      <div className="sm:flex-1">
        { featured && (
          <Text variant="overline" className="block mb-6 sm:mb-4">
            New Product
          </Text>
        )}

        <Text variant="heading-2" className="!text-3xl lg:!text-5xl mb-6">
          { name }
        </Text>

        <Text variant="body" className="opacity-50 mb-6">
          { description }
        </Text>

        <Text variant="heading-6" as="span" className="block mb-8 tracking-widest sm:mb-6 lg:mb-12">
          { formattedPrice }
        </Text>

        <div className="flex gap-4 items-center">
          <QuantityInput />
          <Button variant="primary" className="py-3">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductHeading
