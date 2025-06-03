"use client"

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full mt-10 py-6 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
      <div className="text-center sm:text-left">
        <p>
          © {new Date().getFullYear()} ShopStack. Built by{" "}
          <Link
            href="https://haswanthdev.vercel.app"
            target="_blank"
            className="underline hover:text-yellow-400"
          >
            Haswanth Tamil
          </Link>
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="https://haswanthdev.vercel.app"
          target="_blank"
          className="hover:text-yellow-400 transition"
        >
          Portfolio
        </Link>
        <Link
          href="mailto:haswanthtamilofficial@gmail.com"
          className="hover:text-yellow-400 transition"
        >
          Email Me
        </Link>
      </div>
    </footer>
  )
}

export default Footer
