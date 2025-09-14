"use client"

import { Search, X, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)

  const trendingSearches = ["Táo Fuji", "Nước cam", "Sữa tươi", "Bánh quy", "Trái cây tươi"]

  const clearSearch = () => {
    onSearchChange("")
  }

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder="Tìm kiếm sản phẩm, thương hiệu..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="pl-12 pr-12 h-12 bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:bg-white text-base"
        />
        {searchQuery && (
          <Button
            size="sm"
            variant="ghost"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Trending searches dropdown */}
      {isFocused && !searchQuery && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 z-50">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Tìm kiếm phổ biến</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((term, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-green-100 hover:text-green-700 transition-colors"
                onClick={() => onSearchChange(term)}
              >
                {term}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
