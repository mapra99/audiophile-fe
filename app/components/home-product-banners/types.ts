import type { Product } from "~/models/product";

export interface HomeProductBannersProps {
  products: {
    primary?: Product,
    background?: Product,
    sideBySide?: Product
  }
}
