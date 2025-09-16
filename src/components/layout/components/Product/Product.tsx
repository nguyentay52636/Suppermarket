"use client"

import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { CategoryProduct } from './components/ListProduct/components/CategoryProduct/CategoryProduct'
import { ListProduct } from './components/ListProduct/ListProduct'
import { PaginationProvider } from '@/context/PaginationContext'
export default function Product() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [searchFilters, setSearchFilters] = useState<any>(null)

    const handleAdvancedSearch = (filters: any) => {
        setSearchFilters(filters)
        setSearchQuery(filters.query)
    }

    const handleResetSearch = () => {
        setSearchFilters(null)
        setSearchQuery("")
    }

    return (
        <PaginationProvider>
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                <CategoryProduct selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} showAll={true} />
                <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                <ListProduct selectedCategory={selectedCategory} searchQuery={searchQuery} searchFilters={searchFilters} />
            </div>
        </PaginationProvider>
    )
}
