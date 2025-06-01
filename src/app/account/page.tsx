"use client"

import RedirectBtn from "@/components/RedirectBtn"
import { useState, useEffect } from "react"
import Link from "next/link"

const Account = () => {
  const [orders, setOrders] = useState<string[] | null>(null)

  useEffect(() => {
    const storedOrders = localStorage.getItem("orders")
    const parsed = storedOrders ? JSON.parse(storedOrders) : []
    setOrders(parsed)
  }, [])

  const [cart, setCart] = useState<string[] | null>(null)

  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    const parsed = storedCart ? JSON.parse(storedCart) : []
    setCart(parsed)
  }, [])
  return (
    <div className="relative">
      <RedirectBtn
        content="Home"
        page="/"
        classAtr="bg-black text-white px-2 py-1 rounded hover:opacity-80 absolute top-2 right-2 text-xl"
      />
      <h1 className="text-3xl font-bold px-2 py-2">Welcome,</h1>
      <div className="py-2 px-2">
        <hr />
        <div className="orders px-2 py-2">
          <h2 className="text-2xl font-semibold">Orders</h2>
          <div>
            {orders && orders.length > 0 ? (
              orders.map((order, i) => <div key={i}>{order}</div>)
            ) : (
              <>
                <p>You have no orders yet.</p>
                <p>
                  Check out our{" "}
                  <Link href="/" className="text-blue-500">
                    shop
                  </Link>
                  .
                </p>
              </>
            )}
          </div>
        </div>
        <hr />
        <div className="cart px-2 py-2">
          <h2 className="text-2xl font-semibold">Cart</h2>
          <div>
            {cart && cart.length > 0 ? (
              cart.map((cartItem, i) => <div key={i}>{cartItem}</div>)
            ) : (
              <>
                <p>You have no items in your cart.</p>
                <p>Start adding products and make a purchase.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
