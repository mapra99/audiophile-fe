import { Text } from '~/components'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartSummaryItemProps } from './types'

const PurchaseCartSummaryItem = ({ cartItem }: PurchaseCartSummaryItemProps) => {
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

      <div className="flex-none opacity-50 font-bold">
        x{quantity}
      </div>
    </div>
  )
}

export default PurchaseCartSummaryItem
