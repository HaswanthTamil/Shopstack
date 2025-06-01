import type { Metadata } from "next"
import "../styles/globals.css"

export const metadata: Metadata = {
  title: "Shopstack",
  description: "One stop solution for all your needs",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
