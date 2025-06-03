"use client"

import { useState, useEffect } from "react"
import ProductCard from "./ProductCard"

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

const HomeFeed = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/products.json")
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error("Failed to fetch products:", err)
      }
    }

    fetchProducts()
  }, [])
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
      {products.map((item, idx) => (
        <ProductCard
          key={idx}
          title={item.name}
          price={item.price}
          rating={item.rating}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  )
}

export default HomeFeed
