import { Users, Target, Award } from "lucide-react"

export default function About() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Tentang Kami</h1>

          <div className="prose prose-lg mx-auto mb-12">
            <p className="text-gray-600 text-center text-xl">
              UMKM Resep Nusantara adalah platform yang didedikasikan untuk melestarikan dan membagikan kekayaan kuliner
              Indonesia melalui resep-resep tradisional dan modern yang telah teruji.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Komunitas</h3>
              <p className="text-gray-600">
                Membangun komunitas pecinta kuliner Indonesia yang saling berbagi resep dan pengalaman.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Misi</h3>
              <p className="text-gray-600">Melestarikan warisan kuliner nusantara dan mendukung UMKM kuliner lokal.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kualitas</h3>
              <p className="text-gray-600">Menyediakan resep berkualitas tinggi yang telah diuji dan mudah diikuti.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
            <p className="text-gray-700 mb-4">
              Menjadi platform terdepan dalam melestarikan dan mengembangkan kuliner Indonesia, serta memberdayakan UMKM
              kuliner lokal untuk berkembang di era digital.
            </p>
            <p className="text-gray-700">
              Kami percaya bahwa setiap resep memiliki cerita dan sejarah yang berharga. Melalui platform ini, kami
              ingin memastikan bahwa kekayaan kuliner Indonesia dapat dinikmati dan dipelajari oleh generasi mendatang.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
