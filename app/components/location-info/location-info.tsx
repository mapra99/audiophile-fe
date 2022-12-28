import { Text } from '~/components'

import type { LocationInfoProps } from "./types"

const LocationInfo = ({ location }: LocationInfoProps) => {
  const { street_address, postal_code, city, country, extra_info } = location

  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 sm:items-center">
      <Text variant="heading-6">
        { street_address }
      </Text>
      <Text variant="body">
        { postal_code } { city }, { country }
      </Text>
      <Text variant="body" className="opacity-50">
        { extra_info }
      </Text>
    </div>
  )
}

export default LocationInfo
