import { CategoryBanner } from '~/components'
import type { CategoriesListProps } from './types'

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="px-6 sm:px-10">
      <div className="flex flex-col gap-4 max-w-6xl mx-auto sm:flex-row sm:gap-2.5 lg:gap-8">
        { categories.map(category => (
          <CategoryBanner key={category.slug} category={category} />
        ))}
      </div>
    </div>
  )
}

export default CategoriesList
