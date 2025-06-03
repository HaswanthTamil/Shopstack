"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import RedirectBtn from "@/components/RedirectBtn"

type Product = {
  name: string
  brand: string
  price: number
  description: string
  imageUrl: string
  createdAt: string
  rating: number
  category: string
}

const ProductPage = () => {
  const handleAddToCart = () => {
    if (!product) return
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const updatedCart = [...existingCart, product.name]
    localStorage.setItem("cart", JSON.stringify(updatedCart))
    alert(`🛒 "${product.name}" added to cart!`)
  }

  const handleBuyNow = () => {
    if (!product) return
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
    const updatedOrders = [...existingOrders, product.name]
    localStorage.setItem("orders", JSON.stringify(updatedOrders))
    alert(`✅ "${product.name}" ordered successfully!`)
  }
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/products.json")
      const data: Product[] = await res.json()
      const found = data.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
      )
      setProduct(found || null)
    }

    fetchProduct()
  }, [slug])

  if (!product) return <div className="p-4">Product not found 😢</div>

  return (
    <div className="p-4 relative">
      <RedirectBtn
        content="Home"
        page="/"
        classAtr="bg-black text-white px-2 py-1 rounded hover:opacity-80 absolute top-2 right-2 text-xl"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-64 my-4"
        width={200}
        height={200}
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-gray-500">
        {product.brand} • {product.category}
      </p>
      <p className="text-xl font-semibold">${product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <div className="flex flex-col gap-2 justify-between items-center py-4">
        <button
          className="bg-black text-white px-2 py-1 rounded hover:opacity-80 text-xl w-[80%] sm:w-[40%]"
          onClick={() => handleAddToCart()}
        >
          Add to Cart
        </button>
        <button
          className="bg-black text-white px-2 py-1 rounded hover:opacity-80 text-xl w-[80%] sm:w-[40%]"
          onClick={() => handleBuyNow()}
        >
          Buy now
        </button>
      </div>
    </div>
  )
}

export default ProductPage
