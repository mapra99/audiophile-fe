import { useState } from 'react'
import { PurchaseCart as CartIcon } from '~/icons'
import { PurchaseCartModal } from '~/components'

import type { PurchaseCart as PurchaseCartType } from '~/models/purchase-cart'
import type { PurchaseCartProps } from "./types"

const PurchaseCart = ({ activeCart }: PurchaseCartProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [cart] = useState<PurchaseCartType | undefined>(activeCart)

  const openCartList = () => {
    setOpen(true)
    document.body.dataset["modal"] = 'open'
  }

  const closeCartList = () => {
    setOpen(false)
    document.body.dataset["modal"] = 'closed'
  }

  return (
    <div className="relative">
      <button onClick={openCartList}>
        <CartIcon className="w-6" />
      </button>

      { open && (
        <PurchaseCartModal
          cart={cart}
          onClose={closeCartList}
        />
      )}
    </div>
  )
}

export default PurchaseCart
