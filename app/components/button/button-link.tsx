import { Link } from '@remix-run/react'
import { Chevron } from '~/icons'

import type { ButtonLinkProps } from './types'

const Button = ({variant, children, className, ...props}: ButtonLinkProps) => {
  let styles = 'block px-8 py-4 uppercase font-sans text-sm tracking-widest font-bold transition-colors '
  if (variant === 'primary') {
    styles += 'bg-orange hover:bg-orange-light text-white'
  } else if (variant === 'secondary') {
    styles += 'bg-white hover:bg-black text-black hover:text-white border-2 border-black'
  } else if (variant === 'tertiary') {
    styles += 'flex items-center gap-2.5 text-black hover:text-orange'
  }

  return (
    <Link {...props} className={`${styles} ${className || ''}`}>
      { children }
      { variant === 'tertiary' && <Chevron />}
    </Link>
  )
}

export default Button
