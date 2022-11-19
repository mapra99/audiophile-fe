import { Chevron } from '~/icons'

import type { ButtonProps } from './types'

const Button = ({variant, children, className, ...props}: ButtonProps) => {
  let styles = 'block px-8 py-4 uppercase font-sans text-sm tracking-widest font-bold transition-colors '
  if (variant === 'primary') {
    styles += 'bg-orange hover:bg-orange-light text-white'
  } else if (variant === 'secondary') {
    styles += 'bg-white hover:bg-black text-black hover:text-white border-2 border-black'
  } else if (variant === 'tertiary') {
    styles += 'flex items-center gap-2.5 text-black hover:text-orange'
  }

  return (
    <button {...props} className={`${styles} ${className || ''}`}>
      { children }
      { variant === 'tertiary' && <Chevron />}
    </button>
  )
}

export default Button
