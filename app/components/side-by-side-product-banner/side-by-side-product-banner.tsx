import { Text, ButtonLink } from '~/components'

import type { SideBySideProductBannerProps } from './types'

const SideBySideProductBanner = ({ product }: SideBySideProductBannerProps) => {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:gap-3 lg:gap-8">
      { product.contents.home_image && (
        <div className="rounded-lg sm:box-border sm:w-1/2">
          <img
            className="rounded-lg object-cover w-full h-full"
            src={product.contents.home_image[0]} alt=''
          />
        </div>
      )}

      <div className="rounded-lg py-10 px-6 bg-gray sm:px-10 sm:py-24 sm:box-border sm:w-1/2 lg:px-24">
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

export default SideBySideProductBanner
