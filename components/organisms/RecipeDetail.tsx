"use client"

import Image from "next/image"
import { ArrowLeft, Clock, Users, Star, ChefHat } from "lucide-react"
import { useRouter } from "next/navigation"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"

interface Recipe {
  id: number
  name: string
  image: string
  prepTimeMinutes: number
  cookTimeMinutes?: number
  servings: number
  difficulty: string
  cuisine: string
  rating?: number
  reviewCount?: number
  tags?: string[]
  ingredients: string[]
  instructions: string[]
  nutrition?: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
}

interface RecipeDetailProps {
  recipe: Recipe
}

export default function RecipeDetail({ recipe }: RecipeDetailProps) {
  const router = useRouter()

  const totalTime = recipe.prepTimeMinutes + (recipe.cookTimeMinutes || 0)

  return (
    <div className="py-8">
      <div className="container">
        <div className="mb-6">
          <Button variant="outline" onClick={() => router.back()} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
            </div>

            {recipe.tags && (
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>

            {recipe.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-semibold">{recipe.rating}</span>
                </div>
                <span className="text-gray-600">({recipe.reviewCount} ulasan)</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Card className="p-4 text-center">
                <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Total Waktu</div>
                <div className="font-semibold">{totalTime} menit</div>
              </Card>

              <Card className="p-4 text-center">
                <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Porsi</div>
                <div className="font-semibold">{recipe.servings} orang</div>
              </Card>

              <Card className="p-4 text-center">
                <ChefHat className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Kesulitan</div>
                <div className="font-semibold">{recipe.difficulty}</div>
              </Card>

              <Card className="p-4 text-center">
                <div className="w-6 h-6 text-orange-600 mx-auto mb-2 font-bold text-lg">🍽️</div>
                <div className="text-sm text-gray-600">Masakan</div>
                <div className="font-semibold">{recipe.cuisine}</div>
              </Card>
            </div>

            {recipe.nutrition && (
              <Card className="p-4 mb-6">
                <h3 className="font-semibold mb-3">Informasi Gizi (per porsi)</h3>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-orange-600">{recipe.nutrition.calories}</div>
                    <div className="text-xs text-gray-600">Kalori</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">{recipe.nutrition.protein}g</div>
                    <div className="text-xs text-gray-600">Protein</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">{recipe.nutrition.carbs}g</div>
                    <div className="text-xs text-gray-600">Karbohidrat</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-600">{recipe.nutrition.fat}g</div>
                    <div className="text-xs text-gray-600">Lemak</div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Bahan-bahan</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cara Membuat</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </div>
    </div>
  )
}
