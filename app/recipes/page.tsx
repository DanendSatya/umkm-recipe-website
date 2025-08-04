import RecipeGrid from "@/components/organisms/RecipeGrid"

export default function Recipes() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Koleksi Resep</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan berbagai resep makanan lezat dari seluruh dunia. Gunakan fitur pencarian untuk menemukan resep
            favorit Anda.
          </p>
        </div>
        <RecipeGrid />
      </div>
    </div>
  )
}
