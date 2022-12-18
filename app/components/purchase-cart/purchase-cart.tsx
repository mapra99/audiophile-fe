import { useContext } from 'react'
import { PurchaseCart as CartIcon } from '~/icons'
import { PurchaseCartModal } from '~/components'
import { PurchaseCartContext } from '~/contexts/purchase-cart-context'

import type { PurchaseCartProps } from "./types"

const PurchaseCart = (_args: PurchaseCartProps) => {
  const { cart, cartListOpen, openCartList, closeCartList } = useContext(PurchaseCartContext)

  return (
    <div className="relative">
      <button onClick={openCartList}>
        <CartIcon className="w-6" />
      </button>

      { cartListOpen && (
        <PurchaseCartModal
          cart={cart}
          onClose={closeCartList}
        />
      )}
    </div>
  )
}

export default PurchaseCart
