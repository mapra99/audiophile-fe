import type { Product, ProductStock } from '~/models/product'

export interface ProductHeadingpProps {
  product: Product
  stocks: ProductStock[]
}
