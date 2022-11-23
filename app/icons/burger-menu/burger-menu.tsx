import type { BurgerMenuProps } from "./types"

const BurgerMenu = ({ className }: BurgerMenuProps) => (
  <svg className={ className } viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect id="Rectangle" width="16" height="3" fill="white"/>
    <rect id="Rectangle Copy" y="6" width="16" height="3" fill="white"/>
    <rect id="Rectangle Copy 2" y="12" width="16" height="3" fill="white"/>
  </svg>
)

export default BurgerMenu
