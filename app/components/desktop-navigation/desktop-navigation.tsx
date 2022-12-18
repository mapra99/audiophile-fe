import { Link } from '@remix-run/react'

import type { DesktopNavigationProps } from './types'

const DesktopNavigation = ({ categories }: DesktopNavigationProps) => {
  return (
    <nav className="flex items-center gap-9">
      <Link to="/" className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition">
        Home
      </Link>
      {
        categories.map(category => (
          <Link
            key={category.slug}
            to={`categories/${category.slug}`}
            className="font-sans text-white text-xs uppercase font-bold tracking-widest hover:text-orange transition"
          >
            { category.name }
          </Link>
        ))
      }
    </nav>
  )
}

export default DesktopNavigation
