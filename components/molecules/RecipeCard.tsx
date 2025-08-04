import Image from "next/image"
import { Clock, Users } from "lucide-react"
import Card from "@/components/atoms/Card"
import Link from "next/link"
import Button from "@/components/atoms/Button"

interface Recipe {
  id: number
  name: string
  image: string
  prepTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
}

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Card hover className="h-full">
      <div className="relative h-48">
        <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
          {recipe.difficulty}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{recipe.name}</h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.prepTimeMinutes} menit</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings} porsi</span>
          </div>
        </div>

        <div className="text-sm text-orange-600 font-medium">{recipe.cuisine}</div>
        <div className="mt-4">
          <Link href={`/recipes/${recipe.id}`}>
            <Button size="sm" className="w-full">
              Lihat Resep
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
