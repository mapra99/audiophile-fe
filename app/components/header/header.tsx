import { useState } from 'react'
import { Link } from '@remix-run/react'
import { useMediaQuery } from 'react-responsive'
import { AudiophileLogo, BurgerMenu } from '~/icons'
import { PurchaseCart, DesktopNavigation, MobileNavigation } from '~/components'
import { BREAKPT_LG } from '~/constants'

import type { HeaderProps } from './types'

const Header = ({ categories }: HeaderProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)
  const isBigScreen = useMediaQuery({ query: `(min-width: ${BREAKPT_LG}px)` })

  const openMenu = () => {
    setMenuOpened(true)
    document.body.dataset['modal'] = 'open'
  }

  const closeMenu = () => {
    setMenuOpened(false)
    document.body.dataset['modal'] = 'closed'
  }

  return (
    <header
      className="bg-brown py-8 px-6 sm:px-10"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        { !isBigScreen && (
          <button onClick={openMenu}>
            <BurgerMenu className="w-4"/>
          </button>
        )}

        <Link to="/" className="flex-1 flex justify-center sm:justify-start sm:ml-11 lg:ml-0 lg:flex-initial">
          <AudiophileLogo />
        </Link>

        { isBigScreen && (
          <DesktopNavigation categories={categories} />
        )}

        <PurchaseCart />
      </div>

      { !isBigScreen && (
        <MobileNavigation categories={categories} open={menuOpened} onClose={closeMenu} />
      )}
    </header>
  )
}

export default Header
