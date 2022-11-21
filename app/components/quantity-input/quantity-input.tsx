import { useState } from 'react'
import type { ChangeEvent } from 'react'
import type { QuantityInputProps } from "./types"

const QuantityInput = ({ className, value, onChange, ...props }: QuantityInputProps) => {
  const [qty, setQty] = useState(value as number || 0)

  const increment = () => setQty(qty + 1)
  const decrement = () => setQty(qty - 1)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQty = parseInt(event.target.value)
    setQty(newQty)

    if(onChange) onChange(event)
  }

  const buttonStyles = 'bg-gray h-12 w-12 flex items-center justify-center text-xs text-black font-bold hover:text-orange transition-all'
  const inputStyles = 'text-center bg-gray text-black font-bold m-0 w-6 focus:outline-none text-xs'

  return (
    <div className="flex">
      <button className={buttonStyles} onClick={decrement}>-</button>
      <input
        {...props}
        className={`${inputStyles} ${className || ''}`}
        value={qty}
        onChange={handleChange}
      />
      <button className={buttonStyles} onClick={increment}>+</button>
    </div>
  )
}

export default QuantityInput
