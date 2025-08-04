"use client"

import type React from "react"
import { useState } from "react"
import { Search, X } from "lucide-react"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"

interface SearchBarProps {
  onSearch: (query: string) => void
  onClear?: () => void
  placeholder?: string
}

export default function SearchBar({ onSearch, onClear, placeholder = "Cari resep..." }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
    if (onClear) {
      onClear()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    // Auto search saat mengetik (debounced)
    if (value.trim() === "") {
      onSearch("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <div className="flex-1 relative">
        <Input type="text" value={query} onChange={handleInputChange} placeholder={placeholder} className="pr-20" />

        {/* Clear button - hanya muncul jika ada text */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Hapus pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Search icon */}
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <Search className="w-4 h-4" />
        </div>
      </div>

      <Button type="submit" size="md" className="px-4">
        Cari
      </Button>
    </form>
  )
}
