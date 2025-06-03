"use client"

import Header from "@/components/Header"
import HomeFeed from "@/components/HomeFeed"
import { useState } from "react"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  return (
    <>
      <div className="p-0 m-0 h-full">
        <Header onSearch={setSearchTerm} />
        <HomeFeed searchTerm={searchTerm} />
      </div>
    </>
  )
}

export default Home
