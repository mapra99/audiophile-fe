import type { ProductCategory } from "~/models/product-category";

export interface MobileNavigationProps {
  categories: ProductCategory[]
  open: boolean
  onClose: () => void
}
