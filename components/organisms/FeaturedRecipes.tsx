import RecipeCard from "@/components/molecules/RecipeCard"
import { getFeaturedRecipes } from "@/lib/recipes-data"

// Fallback data jika API gagal
const fallbackRecipes = [
  {
    id: 1,
    name: "Nasi Gudeg Yogyakarta",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 120,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indonesian",
  },
  {
    id: 2,
    name: "Rendang Daging Sapi",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 180,
    servings: 6,
    difficulty: "Hard",
    cuisine: "Indonesian",
  },
  {
    id: 3,
    name: "Soto Ayam Lamongan",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 60,
    servings: 4,
    difficulty: "Easy",
    cuisine: "Indonesian",
  },
  {
    id: 4,
    name: "Gado-gado Jakarta",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 30,
    servings: 2,
    difficulty: "Easy",
    cuisine: "Indonesian",
  },
  {
    id: 5,
    name: "Bakso Malang",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 90,
    servings: 4,
    difficulty: "Medium",
    cuisine: "Indonesian",
  },
  {
    id: 6,
    name: "Pempek Palembang",
    image: "/placeholder.svg?height=300&width=400",
    prepTimeMinutes: 45,
    servings: 3,
    difficulty: "Medium",
    cuisine: "Indonesian",
  },
]

export default function FeaturedRecipes() {
  const recipes = getFeaturedRecipes(6)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Resep Pilihan</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan resep-resep terpilih yang cocok untuk mengembangkan bisnis UMKM kuliner Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
