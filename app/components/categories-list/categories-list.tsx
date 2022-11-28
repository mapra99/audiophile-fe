import { CategoryBanner } from '~/components'
import type { CategoriesListProps } from './types'

const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="flex flex-col px-6 mb-28 gap-4 sm:px-10">
      { categories.map(category => (
        <CategoryBanner key={category.slug} category={category} />
      ))}
    </div>
  )
}

export default CategoriesList
