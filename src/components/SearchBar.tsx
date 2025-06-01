"use client"

import { Bars3Icon } from "@heroicons/react/24/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

interface SearchBarProps {
  classAtr: string
}

const SearchBar = ({ classAtr }: SearchBarProps) => {
  return (
    <div className={`${classAtr} sm:w-full`}>
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-[#FEBD69] p-3">
          <MagnifyingGlassIcon className="h-7 w-7 block text-black sm:text-white" />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            placeholder="Search Shopstack"
            className="bg-transparent outline-none focus:outline-none text-lg text-black sm:text-white"
          />
        </div>
        <button
          className="flex items-center border border-transparent hover:border-black sm:hover:border-white transition-border duration-200 p-2 rounded mr-2"
          onClick={() => console.log("hello")}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
