import { Text, QuantityInput } from '~/components'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartListItemProps } from './types'

const PurchaseCartListItem = ({ cartItem }: PurchaseCartListItemProps) => {
  const { uuid, stock: { product }, unit_price, quantity } = cartItem

  return (
    <div key={uuid} className="flex gap-4 items-center">
      <div className="rounded-lg bg-gray w-16 h-16 flex items-center justify-center flex-none">
        { product.image && (
          <img src={product.image.url} alt="" className="block w-9" />
        ) }
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Text variant="body" className="!font-bold text-ellipsis overflow-hidden" as="span">
          { product.name }
        </Text>
        <Text variant="body" className="!font-bold text-black opacity-50 text-ellipsis overflow-hidden" as="span">
          { formatCurrency(unit_price) }
        </Text>
      </div>

      <div className="flex-none">
        <QuantityInput value={quantity} />
      </div>
    </div>
  )
}

export default PurchaseCartListItem
