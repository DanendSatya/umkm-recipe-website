import { notFound } from "next/navigation"
import RecipeDetail from "@/components/organisms/RecipeDetail"
import { getRecipeById, getAllRecipes } from "@/lib/recipes-data"
import type { Metadata } from "next"

interface RecipePageProps {
  params: { id: string }
}

// Dynamic route dengan data fetching
export default async function RecipeDetailPage({ params }: RecipePageProps) {
  const {id} = await params
  const recipeId = await parseInt(id)

  // Simulate API call dengan delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const recipe = await getRecipeById(recipeId)

  // Handle 404 jika resep tidak ditemukan
  if (!recipe) {
    notFound()
  }

  return <RecipeDetail recipe={recipe} />
}

// Generate metadata dinamis
export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const {id} = await params
  const recipeId = await parseInt(id)
  const recipe = getRecipeById(recipeId)

  if (!recipe) {
    return {
      title: "Resep Tidak Ditemukan - UMKM Resep Nusantara",
      description: "Halaman resep yang Anda cari tidak ditemukan.",
    }
  }

  return {
    title: `${recipe.name} - UMKM Resep Nusantara`,
    description: `Resep ${recipe.name} yang lezat dan mudah dibuat. Cocok untuk UMKM kuliner. Rating: ${recipe.rating}/5 dari ${recipe.reviewCount} ulasan.`,
    keywords: [recipe.name, recipe.cuisine, recipe.difficulty, ...(recipe.tags || [])].join(", "),
    openGraph: {
      title: recipe.name,
      description: `Resep ${recipe.name} - ${recipe.difficulty} level, ${recipe.servings} porsi`,
      images: [recipe.image],
      type: "article",
    },
  }
}

// Generate static params untuk semua resep (Static Generation)
export async function generateStaticParams() {
  const recipes = getAllRecipes()

  return recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }))
}
