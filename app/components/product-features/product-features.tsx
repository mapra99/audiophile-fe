import { Text } from '~/components'
import splitParagraphs from '~/utils/split-paragraphs'
import type { BoxItem } from '~/models/product'
import type { ProductFeaturesProps } from './types'

const ProductFeatures = ({ product }: ProductFeaturesProps) => {
  const { contents: { features, box_content } } = product

  const featuresParagraphs = splitParagraphs(features)
  const boxItems = JSON.parse(box_content) as BoxItem[]

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-20 sm:gap-28 lg:flex-row lg:gap-32">
      <div className="lg:flex-1">
        <Text variant="heading-3" className="!text-2xl sm:!text-4xl mb-6 sm:mb-8">
          Features
        </Text>

        <div className="flex flex-col gap-10">
          { featuresParagraphs.map(paragraph => (
            <Text key="" variant="body" className="text-base opacity-50">
              { paragraph }
            </Text>
          )) }
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 lg:flex-col lg:flex-0.5">
        <Text variant="heading-3" className="!text-2xl sm:!text-4xl sm:flex-1 lg:flex-initial">
          In the Box
        </Text>

        <div className="flex flex-col gap-2 sm:flex-1">
          { boxItems.map(boxItem => (
            <div key="" className="flex gap-5">
              <Text variant="body" className="!font-bold text-orange w-5" as="span">
                { boxItem.quantity }
              </Text>

              <Text variant="body" className="opacity-50" as="span">
                { boxItem.content }
              </Text>
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}

export default ProductFeatures
