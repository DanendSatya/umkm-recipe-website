import Link from "next/link"
import Button from "@/components/atoms/Button"
import { ChefHat, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <ChefHat className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan atau URL yang
            Anda masukkan salah.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full flex items-center justify-center gap-2">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Link href="/recipes">
            <Button variant="outline" className="w-full bg-transparent flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Jelajahi Resep
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Halaman yang tersedia:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <Link href="/" className="text-orange-600 hover:text-orange-700">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/recipes" className="text-orange-600 hover:text-orange-700">
                Daftar Resep
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-orange-600 hover:text-orange-700">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
