import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/organisms/Navbar"
import Footer from "@/components/organisms/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UMKM Resep Nusantara",
  description: "Platform UMKM untuk berbagi resep makanan tradisional dan modern",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
