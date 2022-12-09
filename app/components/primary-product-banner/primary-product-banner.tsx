import { Text, ButtonLink } from '~/components'

import type { PrimaryProductBannerProps } from "./types"

const PrimaryProductBanner = ({ product }: PrimaryProductBannerProps) => {
  return (
    <div className="bg-orange rounded-lg px-6 py-14 lg:py-32 lg:px-24 lg:flex lg:justify-end lg:items-center lg:relative">
      { product.contents.home_image && (
        <div className="mb-8 sm:mb-16 lg:absolute lg:bottom-0 lg:mb-0 lg:left-32">
          <img
            src={product.contents.home_image[0]}
            alt=''
            className="h-52 mx-auto lg:h-128"
          />
        </div>
      )}

      <div>
        <Text variant="heading-1" className="!text-4.5xl sm:!text-6xl text-white text-center mb-6 w-40 mx-auto sm:w-80 lg:text-left" as="h2">
          { product.name }
        </Text>

        { product.contents.home_description && (
          <Text variant="body" className="font-medium opacity-75 text-white text-center mb-6 sm:w-80 sm:mx-auto sm:mb-10 lg:text-left">
            { product.contents.home_description }
          </Text>
        )}

        <ButtonLink to={`/products/${product.slug}`} variant="secondary" className="w-44 mx-auto text-center !bg-black hover:!bg-white !text-white hover:!text-black lg:mx-0">
          See Product
        </ButtonLink>
      </div>
    </div>
  )
}

export default PrimaryProductBanner
