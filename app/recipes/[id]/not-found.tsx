import Link from "next/link"
import Button from "@/components/atoms/Button"
import { ChefHat } from "lucide-react"

export default function RecipeNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <ChefHat className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Resep Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, resep yang Anda cari tidak dapat ditemukan. Mungkin resep tersebut telah dihapus atau URL yang Anda
            masukkan salah.
          </p>
        </div>

        <div className="space-y-4">
          <Link href="/recipes">
            <Button className="w-full">Lihat Semua Resep</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full bg-transparent">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Saran:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Periksa kembali URL yang Anda masukkan</li>
            <li>Gunakan fitur pencarian untuk menemukan resep</li>
            <li>Kembali ke halaman utama dan jelajahi resep lainnya</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
