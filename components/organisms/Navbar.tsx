import Link from "next/link"
import { ChefHat } from "lucide-react"
import MobileMenu from "@/components/molecules/MobileMenu"

const menuItems = [
  { href: "/", label: "Beranda" },
  { href: "/recipes", label: "Resep" },
  { href: "/about", label: "Tentang Kami" },
]

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">UMKM Resep Nusantara</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
