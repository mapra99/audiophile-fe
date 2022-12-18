import type { ReactNode } from 'react'
import type { PurchaseCart } from '~/models/purchase-cart'

export interface IPurchaseCartContext {
  cart?: PurchaseCart
  cartListOpen: boolean
  openCartList: () => void
  closeCartList: () => void
}

export interface PurchaseCartProviderProps {
  children: ReactNode
  activeCart?: PurchaseCart
}
