import { useState, createContext } from 'react';
import { PurchaseCartSchema } from '~/models/purchase-cart'

import type { PurchaseCart } from '~/models/purchase-cart'
import type { PurchaseCartItemPayload } from '~/models/purchase-cart-item'
import type { IPurchaseCartContext, PurchaseCartProviderProps } from './types';

export const PurchaseCartContext = createContext<IPurchaseCartContext>({
  cartListOpen: false,
  openCartList: () => {},
  closeCartList: () => {},
  createOrUpdateCart: (_item: PurchaseCartItemPayload) => {}
})

export const PurchaseCartProvider = ({ children, activeCart }: PurchaseCartProviderProps) => {
  const [cart, setCart] = useState<PurchaseCart | undefined>(activeCart)
  const [cartListOpen, setCartListOpen] = useState<boolean>(false)

  const openCartList = () => {
    setCartListOpen(true)
    document.body.dataset["modal"] = 'open'
  }

  const closeCartList = () => {
    setCartListOpen(false)
    document.body.dataset["modal"] = 'closed'
  }

  const createOrUpdateCart = async (item: PurchaseCartItemPayload) => {
    const payload = {
      item,
      cartUuid: cart?.uuid
    }

    const response = await fetch('/api/purchase-carts', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    setCart(PurchaseCartSchema.parse(data.cart))
  }

  const contextVal: IPurchaseCartContext = {
    cart,
    cartListOpen,
    openCartList,
    closeCartList,
    createOrUpdateCart
  };

  return (
    <PurchaseCartContext.Provider value={contextVal}>
      {children}
    </PurchaseCartContext.Provider>
  );
};
