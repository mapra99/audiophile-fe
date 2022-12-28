import { useState, createContext } from 'react';
import invariant from 'tiny-invariant'
import { PurchaseCartSchema } from '~/models/purchase-cart'

import type { PurchaseCart } from '~/models/purchase-cart'
import type { PurchaseCartItemPayload } from '~/models/purchase-cart-item'
import type { IPurchaseCartContext, PurchaseCartProviderProps } from './types';

export const PurchaseCartContext = createContext<IPurchaseCartContext>({
  cartListOpen: false,
  openCartList: () => {},
  closeCartList: () => {},
  createOrUpdateCart: (_item: PurchaseCartItemPayload) => {},
  removeCart: () => {},
  removeCartItem: (_itemUuid: string) => {}
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

  const removeCart = async () => {
    invariant(cart, "cart must exist")

    const response = await fetch(`/api/purchase-carts/${cart.uuid}`, { method: 'delete' })
    if (response.ok) setCart(undefined)
  }

  const removeCartItem = async (itemUuid: string) => {
    invariant(cart, "cart must exist")

    const response = await fetch(`/api/purchase-carts/items/${itemUuid}`, { method: 'delete' })
    if (!response.ok) throw new Error(`Something went wrong while deleting item ${itemUuid} from cart. Status ${response.status}`)

    const updatedCartItems = cart.items.filter(item => item.uuid !== itemUuid)

    if (updatedCartItems.length) {
      setCart({
        ...cart,
        items: updatedCartItems
      })
    } else {
      await removeCart();
    }
  }

  const contextVal: IPurchaseCartContext = {
    cart,
    cartListOpen,
    openCartList,
    closeCartList,
    createOrUpdateCart,
    removeCart,
    removeCartItem
  };

  return (
    <PurchaseCartContext.Provider value={contextVal}>
      {children}
    </PurchaseCartContext.Provider>
  );
};
