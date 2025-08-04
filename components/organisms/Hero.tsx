import Link from "next/link"
import Button from "@/components/atoms/Button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Temukan Resep Terbaik untuk UMKM Anda</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Koleksi resep makanan lezat dari seluruh dunia untuk mengembangkan bisnis kuliner Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recipes">
              <Button size="lg" variant="secondary">
                Jelajahi Resep
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600"
              >
                Pelajari Lebih Lanjut
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
