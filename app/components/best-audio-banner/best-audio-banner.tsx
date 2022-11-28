import { Text } from '~/components'

const BestAudioBanner = () => {
  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-col gap-10 sm:gap-16 max-w-6xl mx-auto lg:flex-row lg:gap-32 lg:items-center lg:justify-between">
        <div className="lg:flex-1 lg:order-2">
          <img
            src="/images/best-audio.png"
            alt=''
            className="h-72 object-cover lg:min-h-128"
          />
        </div>

        <div className="lg:flex-1 lg:order-1">
          <Text variant="heading-2" as="h2" className="!text-3xl sm:!text-5xl text-center mb-8 max-w-xl mx-auto lg:text-left">
            Bringing you the <span className="text-orange">best</span> audio gear
          </Text>

          <Text variant="body" as="p" className="opacity-50 text-center max-w-xl mx-auto lg:text-left">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default BestAudioBanner
