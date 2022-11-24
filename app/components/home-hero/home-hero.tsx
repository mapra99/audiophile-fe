import { Text, ButtonLink } from '~/components'
import type { HomeHeroProps } from "./types"

const HomeHero = ({ product }: HomeHeroProps) => {
  const { name, contents: { featured_description, featured_image }, slug } = product

  return (
    <section className="bg-brown">
      <div className="box-border min-h-128 py-28 px-6 relative z-0 sm:min-h-160 sm:px-48 sm:py-32 max-w-6xl mx-auto lg:flex lg:gap-12 lg:px-0 lg:py-10 lg:max-h-160">
        <div className="flex flex-col justify-center items-center">
          <Text variant="overline" className="opacity-50 text-white mb-4 sm:mb-6" as="span">
            New Product
          </Text>
          <Text variant="heading-1" className="!text-4.5xl text-white text-center tracking-wide mb-6 sm:!text-6xl">
            { name }
          </Text>
          <Text variant="body" className="text-white opacity-75 text-center mb-7 sm:mb-10">
            { featured_description }
          </Text>
          <ButtonLink variant="primary" to={`products/${slug}`}>
            See product
          </ButtonLink>
        </div>

        { featured_image ? (
          <img
            src={featured_image[0]}
            alt={`${name} preview`}
            className="absolute left-0 top-0 h-full w-full object-cover -z-10 opacity-50 lg:static lg:opacity-50 lg:w-176 lg:h-full"
          />
        ) : null}
      </div>
    </section>
  )
}

export default HomeHero
