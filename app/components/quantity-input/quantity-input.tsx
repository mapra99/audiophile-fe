import { useState } from 'react'
import type { QuantityInputProps } from "./types"

const QuantityInput = ({ className, value, min, max, onChange, ...props }: QuantityInputProps) => {
  const [qty, setQty] = useState(value as number || 0)

  const increment = () => handleChange(qty + 1)
  const decrement = () => handleChange(qty - 1)
  const handleChange = (value: string | number) => {
    let numValue = typeof(value) === 'string' ? parseInt(value) : value
    if (min !== undefined && numValue < min) numValue = min
    if (max !== undefined && numValue > max) numValue = max

    setQty(numValue)

    if(onChange) onChange(numValue)
  }

  const buttonStyles = 'bg-gray h-12 w-12 flex items-center justify-center text-xs text-black font-bold hover:text-orange transition-all'
  const inputStyles = 'text-center bg-gray text-black font-bold m-0 w-6 focus:outline-none text-xs'

  return (
    <div className="flex h-full">
      <button className={buttonStyles} onClick={decrement} type="button">-</button>
      <input
        {...props}
        className={`${inputStyles} ${className || ''}`}
        value={qty}
        onChange={e => handleChange(e.target.value)}
      />
      <button className={buttonStyles} onClick={increment} type="button">+</button>
    </div>
  )
}

export default QuantityInput
