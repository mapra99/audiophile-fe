import type { CrossProps } from './types'

const Cross = ({ className }: CrossProps) => (
  <svg className={ className } viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect id="Rectangle" x="0.282471" y="11.3135" width="16" height="3" transform="rotate(-45 0.282471 11.3135)" fill="black"/>
    <rect id="Rectangle Copy" x="2.12134" y="0.217773" width="16" height="3" transform="rotate(45 2.12134 0.217773)" fill="black"/>
  </svg>
)

export default Cross
