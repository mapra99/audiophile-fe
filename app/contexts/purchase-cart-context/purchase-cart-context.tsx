import { useState, createContext } from 'react';

import type { PurchaseCart } from '~/models/purchase-cart'
import type { IPurchaseCartContext, PurchaseCartProviderProps } from './types';

export const PurchaseCartContext = createContext<IPurchaseCartContext>({
  cartListOpen: false,
  openCartList: () => {},
  closeCartList: () => {}
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

  const contextVal: IPurchaseCartContext = {
    cart,
    cartListOpen,
    openCartList,
    closeCartList
  };

  return (
    <PurchaseCartContext.Provider value={contextVal}>
      {children}
    </PurchaseCartContext.Provider>
  );
};
