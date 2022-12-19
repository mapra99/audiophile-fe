import type { Product } from '~/models/product'
import type { ProductStock } from '~/models/product-stock'

export interface ProductHeadingpProps {
  product: Product
  stocks: ProductStock[]
}
