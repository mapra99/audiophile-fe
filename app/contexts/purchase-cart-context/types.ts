import type { ReactNode } from 'react'
import type { PurchaseCart, PurchaseCartItemPayload } from '~/models/purchase-cart'

export interface IPurchaseCartContext {
  cart?: PurchaseCart
  cartListOpen: boolean
  openCartList: () => void
  closeCartList: () => void,
  createOrUpdateCart: (item: PurchaseCartItemPayload) => void
}

export interface PurchaseCartProviderProps {
  children: ReactNode
  activeCart?: PurchaseCart
}
