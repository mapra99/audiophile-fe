import { Text, QuantityInput, ButtonLink, Button } from '~/components'
import { Cross } from '~/icons'
import formatCurrency from '~/utils/format-currency'

import type { PurchaseCartListProps } from "./types"

const PurchaseCartList = ({ cart, onClose }: PurchaseCartListProps) => {
  return (
    <div className="z-50 fixed top-0 left-0 right-0 bottom-0">
      <div className="relative h-full w-full p-6 sm:px-10">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-black opacity-40"/>
        <div className="max-w-6xl mx-auto mt-20 max-h-full overflow-scroll pb-20 box-border">
          { cart ? (
            <div className="bg-white py-8 px-7 rounded-lg relative max-w-sm mx-auto sm:ml-auto sm:mr-0">
              <button onClick={onClose} className="absolute right-7 top-8 w-4">
                <Cross />
              </button>

              <div className="mb-8">
                <Text variant="heading-6" className="mb-2">
                  Cart ({cart.items.length})
                </Text>

                <button className="text-base text-black opacity-50 underline">
                  Remove all
                </button>
              </div>

              <div className="flex flex-col gap-6 mb-8">
                { cart.items.map(cartItem => (
                  <div key={cartItem.uuid} className="flex gap-4 items-center">
                    <div className="rounded-lg bg-gray w-16 h-16 flex items-center justify-center flex-none">
                      { cartItem.stock.product.image && (
                        <img src={cartItem.stock.product.image.url} alt="" className="block w-9" />
                      ) }
                    </div>

                    <div className="flex flex-col flex-1 overflow-hidden">
                      <Text variant="body" className="!font-bold text-ellipsis overflow-hidden" as="span">
                        { cartItem.stock.product.name }
                      </Text>
                      <Text variant="body" className="!font-bold text-black opacity-50 text-ellipsis overflow-hidden" as="span">
                        { formatCurrency(cartItem.unit_price) }
                      </Text>
                    </div>

                    <div className="flex-none">
                      <QuantityInput value={cartItem.quantity} />
                    </div>
                  </div>
                )) }
              </div>

              <div className="flex justify-between mb-6 items-center">
                <Text variant="body" className="!font-medium opacity-50 uppercase" as="span">
                  Total
                </Text>

                <Text variant="heading-6" as="span">
                  { formatCurrency(cart.total_price) }
                </Text>
              </div>

              <ButtonLink variant="primary" to="/checkout" className="text-center">
                Checkout
              </ButtonLink>
            </div>
          ) : (
            <div className="bg-white py-8 px-7 rounded-lg relative max-w-sm mx-auto sm:ml-auto sm:mr-0">
              <Text variant="body" className="text-center mb-6">
                You have no products added to the cart yet
              </Text>

              <Button variant="primary" className="mx-auto" onClick={onClose}>
                Continue Shopping
              </Button>
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default PurchaseCartList
