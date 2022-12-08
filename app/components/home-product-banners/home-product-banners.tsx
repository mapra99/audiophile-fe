import { PrimaryProductBanner, BackgroundProductBanner, SideBySideProductBanner } from '~/components'
import type { HomeProductBannersProps } from './types'

const HomeProductBanners = ({ products }: HomeProductBannersProps) => {
  const { primary, background, sideBySide } = products

  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-col gap-6 max-w-6xl mx-auto sm:gap-8 lg:gap-12">
        { primary && <PrimaryProductBanner product={primary} /> }
        { background && <BackgroundProductBanner product={background} /> }
        { sideBySide && <SideBySideProductBanner product={sideBySide} /> }
      </div>
    </div>
  )
}

export default HomeProductBanners
