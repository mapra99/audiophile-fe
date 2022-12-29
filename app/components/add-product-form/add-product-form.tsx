import { useContext, useState } from 'react'
import invariant from 'tiny-invariant'
import { QuantityInput, Button, Text } from '~/components'
import { PurchaseCartContext } from '~/contexts/purchase-cart-context'

import type { ChangeEvent } from 'react'
import type { AddProductFormProps } from './types'

const AddProductForm = ({ stock }: AddProductFormProps) => {
  const { cart, createOrUpdateCart, openCartList } = useContext(PurchaseCartContext)
  const [reachedMaxQuantity, setReachedMaxQuantity] = useState<boolean>(false)

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const quantity = formData.get('quantity') as string | null
    invariant(quantity, 'quantity is required')

    await createOrUpdateCart({
      quantity: parseInt(quantity),
      stock_uuid: stock.uuid
    })

    openCartList()
  }

  const existingItem = cart?.items.find(item => item.stock.uuid === stock.uuid)

  const handleChange = (qty: number) => {
    setReachedMaxQuantity(qty === stock.quantity)
  }

  return (
    <div>
      <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
        <QuantityInput value={existingItem ? existingItem.quantity : 1} name="quantity" onChange={handleChange} min={1} max={stock.quantity} />
        <Button variant="primary" className="py-3" type="submit">
          { existingItem ? "Update Cart" : "Add to Cart" }
        </Button>
      </form>
      { reachedMaxQuantity && (
        <Text variant="body" className="!text-danger !leading-none italic mt-4">
          There are only { stock.quantity } units available
        </Text>
      )}
    </div>
  )
}

export default AddProductForm
