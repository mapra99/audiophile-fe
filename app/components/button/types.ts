import type { LinkProps } from '@remix-run/react'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary'
}

export interface ButtonLinkProps extends LinkProps {
  variant: 'primary' | 'secondary' | 'tertiary'
}

