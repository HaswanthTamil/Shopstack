import Image from "next/image"

interface ProductCardProps {
  title: string
  price: number
  rating: number
  imageUrl: string
}

const ProductCard = ({ title, price, rating, imageUrl }: ProductCardProps) => {
  return (
    <div
      className="w-full border-2 border-gray-200 hover:border-gray-400 transition-all
      duration-300 ease-in-out overflow-hidden rounded-lg"
    >
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="px-2 py-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold">{title}</h2>
          <span className="text-yellow-500 text-sm">⭐ {rating}/5</span>
        </div>
        <p className="text-gray-800 font-medium">${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
