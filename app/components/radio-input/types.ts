import type { ReactNode, InputHTMLAttributes } from 'react'

export interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode
  className?: string
}
