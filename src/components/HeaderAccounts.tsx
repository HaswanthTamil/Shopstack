"use client"

import { useRouter } from "next/navigation"
import { User } from "lucide-react"

interface HeaderAccountsProps {
  isSignedIn: boolean
}

const HeaderAccounts = ({ isSignedIn }: HeaderAccountsProps) => {
  const router = useRouter()

  return (
    <>
      <div>
        {isSignedIn ? (
          <div>
            <button
              onClick={() => {
                router.push("/account")
              }}
              className="flex items-center"
            >
              <User className="w-8 h-8 text-gray-50 border-2 border-gray-50 hover:bg-gray-700 rounded-full" />
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                router.push("/signup")
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default HeaderAccounts
