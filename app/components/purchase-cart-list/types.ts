import type { PurchaseCart } from '~/models/purchase-cart'

export interface PurchaseCartListProps {
  cart: PurchaseCart | undefined
  onClose: () => void
}
