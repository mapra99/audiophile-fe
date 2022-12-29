import { Link } from '@remix-run/react'
import { Text, ButtonLink } from '~/components'
import type { CategoryBannerProps } from './types'

const CategoryBanner = ({ category }: CategoryBannerProps) => {
  const { name, slug, image } = category
  const categoryPath = `/categories/${slug}`

  return (
    <Link className="mt-16 flex-1 lg:mt-20" to={categoryPath}>
      <div className="bg-gray box-border pt-8 px-2 pb-6 rounded-lg relative">
        <div className="absolute -top-16 lg:-top-20 w-full text-center">
          <img
              src={image.url}
              alt={`${name} icon`}
              className="h-32 mx-auto lg:h-40"
          />
        </div>
        <div className="w-40 h-9 bg-black opacity-20 mx-auto rounded-[50%] blur-xl mb-6" />
        <Text variant="body" as="h2" className="uppercase !font-bold text-center mb-3">
          { name }
        </Text>
        <ButtonLink variant="tertiary" to={categoryPath} className="justify-center !py-0 !px-0 mx-auto">
          Shop
        </ButtonLink>
      </div>
    </Link>
  )
}

export default CategoryBanner
