import { useContext } from 'react'
import { Text, QuantityInput } from '~/components'
import { PurchaseCartContext } from '~/contexts/purchase-cart-context'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartListItemProps } from './types'

const PurchaseCartListItem = ({ cartItem }: PurchaseCartListItemProps) => {
  const { createOrUpdateCart } = useContext(PurchaseCartContext)
  const { uuid, stock: { uuid: stockUuid, product, quantity: stockQuantity }, unit_price, quantity } = cartItem

  const handleItemChange = async (qty: number) => {
    await createOrUpdateCart({
      stock_uuid: stockUuid,
      quantity: qty
    })
  }

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
        <QuantityInput value={quantity} onChange={handleItemChange} min={0} max={stockQuantity} />
      </div>
    </div>
  )
}

export default PurchaseCartListItem
