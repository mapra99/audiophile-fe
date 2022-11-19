import { Link } from '@remix-run/react'
import { Chevron } from '~/icons'
import { resolveStyles } from './base'
import type { ButtonLinkProps } from './types'

const ButtonLink = ({variant, children, className, ...props}: ButtonLinkProps) => {
  const styles = resolveStyles(variant)

  return (
    <Link {...props} className={`${styles} ${className || ''}`}>
      { children }
      { variant === 'tertiary' && <Chevron />}
    </Link>
  )
}

export default ButtonLink
