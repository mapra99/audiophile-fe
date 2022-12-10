import type { ProductCategory } from "~/models/product-category";
import type { PurchaseCart } from "~/models/purchase-cart";

export interface HeaderProps {
  categories: ProductCategory[],
  activeCart: PurchaseCart | undefined
}
