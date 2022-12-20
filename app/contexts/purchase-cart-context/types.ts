import type { ReactNode } from 'react'
import type { PurchaseCart } from '~/models/purchase-cart'
import type { PurchaseCartItemPayload } from '~/models/purchase-cart-item'

export interface IPurchaseCartContext {
  cart?: PurchaseCart
  cartListOpen: boolean
  openCartList: () => void
  closeCartList: () => void,
  createOrUpdateCart: (item: PurchaseCartItemPayload) => void
  removeCart: () => void
}

export interface PurchaseCartProviderProps {
  children: ReactNode
  activeCart?: PurchaseCart
}
