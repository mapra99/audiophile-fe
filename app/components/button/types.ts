import type { LinkProps } from '@remix-run/react'
import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant
}

export interface ButtonLinkProps extends LinkProps {
  variant: ButtonVariant
}

