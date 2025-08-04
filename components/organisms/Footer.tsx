import { ChefHat, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-orange-600" />
              <span className="text-xl font-bold">UMKM Resep Nusantara</span>
            </div>
            <p className="text-gray-400 mb-4">
              Platform UMKM untuk berbagi resep makanan tradisional dan modern. Melestarikan kekayaan kuliner Indonesia
              untuk generasi mendatang.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-gray-400 hover:text-white transition-colors">
                  Resep
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <ul className="space-y-2 text-gray-400">
              {/* <li>Website: umkmresep.com</li> */}
              <li>Platform UMKM Kuliner</li>
              <li>Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 UMKM Resep Nusantara. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
