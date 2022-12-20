import { Link } from '@remix-run/react'
import { Cross } from '~/icons'

import type { MobileNavigationProps } from './types'

const MobileNavigation = ({ categories, open, onClose }: MobileNavigationProps) => {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 bg-gray z-50 overflow-x-hidden w-0 data-[state=opened]:w-screen transition-all"
      data-state={open ? "opened" : "closed"}
    >
      <div className="py-9 px-6 sm:px-10">
        <button onClick={onClose}>
          <Cross className="pb-8 w-4 transition" />
        </button>

        <nav className="flex flex-col items-center gap-4">
          <Link
            to="/"
            className="font-sans text-black text-xs uppercase font-bold tracking-widest hover:text-orange transition"
            onClick={onClose}
          >
            Home
          </Link>
          {
            categories.map(category => (
              <Link
                key={category.slug}
                to={`categories/${category.slug}`}
                className="font-sans text-black text-xs uppercase font-bold tracking-widest hover:text-orange transition"
                onClick={onClose}
              >
                { category.name }
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  )
}

export default MobileNavigation
