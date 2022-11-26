import { Text, ButtonLink } from '~/components'
import type { ProductBannerProps } from "./types"

const ProductBanner = ({ product }: ProductBannerProps) => {
  const { name, image, contents: { description }, slug, featured } = product

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gray box-border p-10 rounded-lg">
        <img
          src={image.url}
          alt={`Overview of ${name}`}
          className="h-56 mx-auto"
        />
        <div className="w-40 h-9 bg-black opacity-20 mx-auto rounded-[50%] blur-xl" />
      </div>

      <div className="flex flex-col gap-6">
        { featured && (
          <Text variant="overline" as="span" className="text-center">
            New Product
          </Text>
        )}

        <Text variant="heading-2" as="h2" className="text-3xl sm:text-5xl text-center">
          { name }
        </Text>

        <Text variant="body" as="p" className="opacity-50 text-center">
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
