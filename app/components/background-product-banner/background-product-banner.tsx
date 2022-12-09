import { Text, ButtonLink } from '~/components'

import type { BackgroundProductBannerProps } from './types'

const BackgroundProductBanner = ({ product }: BackgroundProductBannerProps) => {
  return (
    <div
      className="px-6 py-14 min-h-80 bg-cover bg-center rounded-lg flex items-center sm:px-16 lg:px-24"
      style={product.contents.home_image ? {backgroundImage: `url("${product.contents.home_image[0]}")`} : {}}
    >
      <div>
        <Text variant="heading-4" className="mb-8" as="h2">
          { product.name }
        </Text>

        { product.contents.home_description && (
          <Text variant="body" className="mb-8">
            { product.contents.home_description }
          </Text>
        )}

        <ButtonLink
          to={`/products/${product.slug}`}
          variant="secondary"
          className="!bg-[#ffffff00] hover:!bg-black w-44 text-center"
        >
          See Product
        </ButtonLink>
      </div>
    </div>
  )
}

export default BackgroundProductBanner
