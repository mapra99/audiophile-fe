import { useState } from 'react'
import { Link } from '@remix-run/react'
import { AudiophileLogo, BurgerMenu, PurchaseCart, Cross } from '~/icons'
import { Button } from '~/components'

import type { HeaderProps } from './types'

const Header = ({ categories }: HeaderProps) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  return (
    <header
      className="bg-brown py-8 px-6"
    >
      <div className="flex justify-between items-center">
        <button onClick={() => setMenuOpened(true)}>
          <BurgerMenu className="w-4"/>
        </button>
        <Link to="/">
          <AudiophileLogo />
        </Link>
        <PurchaseCart className="w-6" />
      </div>

      <div
        className="fixed top-0 bottom-0 left-0 bg-gray z-50 overflow-x-hidden w-0 data-[state=opened]:w-screen transition-all"
        data-state={menuOpened ? "opened" : "closed"}
      >
        <div className="py-9 px-6">
          <button onClick={() => setMenuOpened(false)}>
            <Cross className="pb-8 w-4 transition" />
          </button>

          <nav className="flex flex-col items-center gap-4">
            <Link to="/" className="font-sans text-black text-xs uppercase font-bold tracking-widest hover:text-orange transition">
              Home
            </Link>
            {
              categories.map(category => (
                <Link
                  key={category.slug}
                  to={`categories/${category.slug}`}
                  className="font-sans text-black text-xs uppercase font-bold tracking-widest hover:text-orange transition"
                >
                  { category.name }
                </Link>
              ))
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
