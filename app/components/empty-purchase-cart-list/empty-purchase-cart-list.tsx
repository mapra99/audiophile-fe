import { Text, Button } from '~/components'

import type { EmptyPurchaseCartListProps } from './types'

const EmptyPurchaseCartList = ({ onClose }: EmptyPurchaseCartListProps) => {
  return (
    <div className="bg-white py-8 px-7 rounded-lg relative max-w-sm mx-auto sm:ml-auto sm:mr-0">
      <Text variant="body" className="text-center mb-6">
        You have no products added to the cart yet
      </Text>

      <Button variant="primary" className="mx-auto" onClick={onClose}>
        Continue Shopping
      </Button>
    </div>
  )
}

export default EmptyPurchaseCartList
