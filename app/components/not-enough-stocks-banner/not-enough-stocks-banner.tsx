import { Text } from '~/components'

const NotEnoughStocksBanner = () => {
  return (
    <div className="bg-gray rounded-lg p-6 opacity-50">
      <Text variant="body" as="span">
        Sorry, this product is sold out. Please check back later
      </Text>
    </div>
  )
}

export default NotEnoughStocksBanner
