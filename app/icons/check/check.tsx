import type { CheckProps } from './types'

const Check = ({ className }: CheckProps) => {
  return (
    <svg viewBox="0 0 26 21" fill="none" className={className ? className : ''}>
      <path d="M1.75391 11.3328L8.50542 18.0843L24.3085 2.28125" strokeWidth="4"/>
    </svg>
  )
}

export default Check
