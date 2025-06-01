"use client"

import { useRouter } from "next/navigation"

interface RedirectBtnProps {
  content: React.ReactNode
  page: string
  classAtr?: string
}

const RedirectBtn = ({ content, page, classAtr }: RedirectBtnProps) => {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.push(page)
      }}
      className={classAtr || ""}
    >
      {content}
    </button>
  )
}

export default RedirectBtn
