"use client"

import { useState, useEffect, useCallback } from "react"
import RecipeCard from "@/components/molecules/RecipeCard"
import SearchBar from "@/components/molecules/SearchBar"
import { getAllRecipes, searchRecipes, type Recipe } from "@/lib/recipes-data"

export default function RecipeGrid() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate loading untuk UX yang lebih baik
    const loadRecipes = () => {
      setLoading(true)

      // Simulate API delay
      setTimeout(() => {
        const allRecipes = getAllRecipes()
        setRecipes(allRecipes)
        setFilteredRecipes(allRecipes)
        setLoading(false)
      }, 500)
    }

    loadRecipes()
  }, [])

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    const results = searchRecipes(query)
    setFilteredRecipes(results)
  }, [])

  const handleClearSearch = useCallback(() => {
    setSearchQuery("")
    setFilteredRecipes(recipes)
  }, [recipes])

  const refreshAllRecipes = useCallback(() => {
    setSearchQuery("")
    setFilteredRecipes(recipes)
  }, [recipes])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Memuat resep...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <SearchBar
          onSearch={handleSearch}
          onClear={handleClearSearch}
          placeholder="Cari berdasarkan nama, masakan, tingkat kesulitan, atau tag..."
        />
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {filteredRecipes.length > 0
              ? `Menampilkan ${filteredRecipes.length} resep untuk "${searchQuery}"`
              : `Tidak ada resep yang ditemukan untuk "${searchQuery}"`}
          </p>
          {filteredRecipes.length === 0 && (
            <button onClick={refreshAllRecipes} className="mt-2 text-orange-600 hover:text-orange-700 underline">
              Tampilkan semua resep
            </button>
          )}
        </div>
      )}

      {filteredRecipes.length === 0 && !searchQuery ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Tidak ada resep yang tersedia.</p>
        </div>
      ) : filteredRecipes.length === 0 && searchQuery ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">Resep tidak ditemukan</h3>
          <p className="text-gray-600 mb-4">Coba gunakan kata kunci yang berbeda atau lebih umum</p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">Saran pencarian:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Ayam", "Sapi", "Nasi", "Soto", "Rendang", "Gudeg", "Bakso"].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSearch(suggestion)}
                  className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}
