import type { PurchaseCart } from '~/models/purchase-cart'

export interface PurchaseCartModalProps {
  cart: PurchaseCart | undefined
  onClose: () => void
  onCartRemoval: () => void
}
