import type { ProductImageProps } from './types'

const ProductImage = ({ url, name }: ProductImageProps) => {
  return (
    <div className="bg-gray box-border p-10 rounded-lg">
      <img
        src={url}
        alt={`Overview of ${name}`}
        className="h-56 mx-auto"
      />
      <div className="w-40 h-9 bg-black opacity-20 mx-auto rounded-[50%] blur-xl" />
    </div>
  )
}

export default ProductImage
