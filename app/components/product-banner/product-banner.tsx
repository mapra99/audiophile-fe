import { Text, ButtonLink } from '~/components'
import type { ProductBannerProps } from "./types"

const ProductBanner = ({ product, index }: ProductBannerProps) => {
  const { name, image, contents: { description }, slug, featured } = product

  return (
    <div className="flex flex-col gap-8 sm:gap-13 max-w-6xl mx-auto lg:flex-row lg:gap-32">
      <div data-order={index % 2 === 0 ? "1" : "2"} className="bg-gray box-border p-10 rounded-lg lg:flex-1 lg:data-[order=2]:order-2 lg:data-[order=1]:order-1">
        <img
          src={image.url}
          alt={`Overview of ${name}`}
          className="h-56 mx-auto"
        />
        <div className="w-40 h-9 bg-black opacity-20 mx-auto rounded-[50%] blur-xl" />
      </div>

      <div data-order={index % 2 === 0 ? "2" : "1"} className="flex flex-col gap-6 sm:gap-4 lg:flex-1 lg:data-[order=2]:order-2 lg:data-[order=1]:order-1">
        { featured && (
          <Text variant="overline" as="span" className="text-center">
            New Product
          </Text>
        )}

        <Text variant="heading-2" as="h2" className="!text-3xl sm:!text-5xl text-center sm:mb-4">
          { name }
        </Text>

        <Text variant="body" as="p" className="opacity-50 text-center sm:mb-2 max-w-xl mx-auto">
          { description }
        </Text>

        <ButtonLink variant="primary" to={`/products/${slug}`} className="text-center w-44 mx-auto">
          See Product
        </ButtonLink>
      </div>
    </div>
  )
}

export default ProductBanner
