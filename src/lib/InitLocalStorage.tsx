"use client"
import { useEffect } from "react"

const InitLocalStorage = () => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const defaults = {
      isSignedIn: false,
      cart: [],
      orders: [],
      searchHistory: [],
    }

    // Set each key only if it's missing
    Object.entries(defaults).forEach(([key, value]) => {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify(value))
      }
    })
  }, [])

  return null // no UI
}

export default InitLocalStorage
