import type { InputHTMLAttributes } from 'react'

export interface QuantityInputProps extends InputHTMLAttributes<HTMLInputElement> {
  min?: number
  max?: number
}
