import { useContext } from 'react'
import invariant from 'tiny-invariant'
import { QuantityInput, Button } from '~/components'
import { PurchaseCartContext } from '~/contexts/purchase-cart-context'

import type { ChangeEvent } from 'react'
import type { AddProductFormProps } from './types'

const AddProductForm = ({ stock }: AddProductFormProps) => {
  const { cart, createOrUpdateCart, openCartList } = useContext(PurchaseCartContext)

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

  return (
    <form className="flex gap-4 items-center" onSubmit={handleSubmit}>
      <QuantityInput value={existingItem ? existingItem.quantity : 1} name="quantity" min={0}/>
      <Button variant="primary" className="py-3" type="submit">
        { existingItem ? "Update Cart" : "Add to Cart" }
      </Button>
    </form>
  )
}

export default AddProductForm
