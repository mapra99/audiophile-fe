import { Text, ButtonLink } from '~/components'
import type { HomeProductBannersProps } from './types'

const HomeProductBanners = ({ products }: HomeProductBannersProps) => {
  const { primary, background, sideBySide } = products

  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto sm:gap-8 lg:gap-12">
        { primary && (
          <div className="bg-orange rounded-lg px-6 py-14 lg:py-32 lg:px-24 lg:flex lg:justify-end lg:items-center lg:relative">
            { primary.contents.home_image && (
              <div className="mb-8 sm:mb-16 lg:absolute lg:bottom-0 lg:mb-0 lg:left-32">
                <img
                  src={primary.contents.home_image[0]}
                  alt=''
                  className="h-52 mx-auto lg:h-128"
                />
              </div>
            )}

            <div>
              <Text variant="heading-1" className="!text-4.5xl sm:!text-6xl text-white text-center mb-6 w-40 mx-auto sm:w-80 lg:text-left" as="h2">
                { primary.name }
              </Text>

              { primary.contents.home_description && (
                <Text variant="body" className="font-medium opacity-75 text-white text-center mb-6 sm:w-80 sm:mx-auto sm:mb-10 lg:text-left">
                  { primary.contents.home_description }
                </Text>
              )}

              <ButtonLink to={`/products/${primary.slug}`} variant="secondary" className="w-44 mx-auto text-center !bg-black hover:!bg-white !text-white hover:!text-black lg:mx-0">
                See Product
              </ButtonLink>
            </div>
          </div>
        )}

        { background && (
          <div
            className="px-6 py-14 min-h-80 bg-cover bg-center rounded-lg flex items-center sm:px-16 lg:px-24"
            style={background.contents.home_image ? {backgroundImage: `url("${background.contents.home_image[0]}")`} : {}}
          >
            <div>
              <Text variant="heading-4" className="mb-8" as="h2">
                { background.name }
              </Text>

              { background.contents.home_description && (
                <Text variant="body" className="mb-8">
                  { background.contents.home_description }
                </Text>
              )}

              <ButtonLink
                to={`/products/${background.slug}`}
                variant="secondary"
                className="!bg-[#ffffff00] hover:!bg-black w-44 text-center"
              >
                See Product
              </ButtonLink>
            </div>
          </div>
        )}

        { sideBySide && (
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-3 lg:gap-8">
            { sideBySide.contents.home_image && (
              <div className="rounded-lg sm:box-border sm:w-1/2">
                <img
                  className="rounded-lg object-cover w-full h-full"
                  src={sideBySide.contents.home_image[0]} alt=''
                />
              </div>
            )}

            <div className="rounded-lg py-10 px-6 bg-gray sm:px-10 sm:py-24 sm:box-border sm:w-1/2 lg:px-24">
              <Text variant="heading-4" className="mb-8" as="h2">
                { sideBySide.name }
              </Text>

              { sideBySide.contents.home_description && (
                <Text variant="body" className="mb-8">
                  { sideBySide.contents.home_description }
                </Text>
              )}

              <ButtonLink
                to={`/products/${sideBySide.slug}`}
                variant="secondary"
                className="!bg-[#ffffff00] hover:!bg-black w-44 text-center"
              >
                See Product
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeProductBanners
