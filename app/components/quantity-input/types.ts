import type { InputHTMLAttributes } from 'react'

export interface QuantityInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  min?: number
  max?: number
  onChange?: (value: number) => void
}
