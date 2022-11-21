import { Chevron } from '~/icons'
import { resolveStyles } from './base'
import type { ButtonProps } from './types'

const Button = ({variant, children, className, ...props}: ButtonProps) => {
  const styles = resolveStyles(variant)

  return (
    <button {...props} className={`${styles} ${className || ''}`}>
      { children }
      { variant === 'tertiary' && <Chevron />}
    </button>
  )
}

export default Button
