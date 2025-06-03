"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

interface SearchBarProps {
  classAtr: string
  onSearch: (value: string) => void
}

const SearchBar = ({ classAtr, onSearch }: SearchBarProps) => {
  const [input, setInput] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className={`${classAtr} sm:w-full mb-4 sm:mb-0`}>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-[#FEBD69] p-3">
          <MagnifyingGlassIcon className="h-7 w-7 block text-black sm:text-white" />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search Shopstack"
            className="bg-transparent outline-none focus:outline-none text-lg text-black sm:text-white"
            value={input}
            onChange={handleChange}
          />
        </div>
        <button
          className="flex items-center border border-transparent hover:border-black sm:hover:border-white transition-border duration-200 p-2 rounded mr-2"
          onClick={() => console.log("hello")}
        ></button>
      </div>
    </div>
  )
}

export default SearchBar
