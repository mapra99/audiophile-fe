import { useContext } from 'react'
import { PurchaseCart as CartIcon } from '~/icons'
import { PurchaseCartModal, Text } from '~/components'
import { PurchaseCartContext } from '~/contexts/purchase-cart-context'

import type { PurchaseCartProps } from "./types"

const PurchaseCart = (_args: PurchaseCartProps) => {
  const { cart, cartListOpen, openCartList, closeCartList, removeCart } = useContext(PurchaseCartContext)

  return (
    <div className="relative">
      <button onClick={openCartList} className="relative">
        <CartIcon className="w-6" />

        { cart?.items.length && (
          <Text variant="body" as="span" className="block absolute left-1/2 top-1/2 text-white !font-bold !text-xs !leading-none p-1 rounded-full bg-orange">
            { cart?.items.length }
          </Text>
        ) }
      </button>

      { cartListOpen && (
        <PurchaseCartModal
          cart={cart}
          onClose={closeCartList}
          onCartRemoval={removeCart}
        />
      )}
    </div>
  )
}

export default PurchaseCart
