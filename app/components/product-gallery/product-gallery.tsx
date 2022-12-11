import type { ProductGalleryProps } from './types'

const ProductGallery = ({ product }: ProductGalleryProps) => {
  const { contents: { preview_images } } = product

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-5 rounded-lg">
        { preview_images.map((imageUrl, index) => (
          <div key="" className={`${index === 1 ? "order-3 sm:order-initial sm:col-start-2 sm:row-start-1 sm:row-end-3" : ""}`}>
            <img src={imageUrl} alt="" className="rounded-lg h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
