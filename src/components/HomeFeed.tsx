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

interface HomeFeedProps {
  searchTerm: string
}

const HomeFeed: React.FC<HomeFeedProps> = ({ searchTerm }) => {
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

  const filteredProducts = products.filter((item) => {
    const term = searchTerm.toLowerCase()
    return (
      item.name.toLowerCase().includes(term) ||
      item.brand.toLowerCase().includes(term) ||
      item.category.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term)
    )
  })

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
      {filteredProducts.map((item, idx) => (
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
