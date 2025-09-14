"use client"

import React, { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { CategoryProduct } from './components/ListProduct/components/CategoryProduct/CategoryProduct'
import { ListProduct } from './components/ListProduct/ListProduct'
export default function Product() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [cartItems, setCartItems] = useState<any[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [currentView, setCurrentView] = useState("home")
    const [searchFilters, setSearchFilters] = useState<any>(null)

    const addToCart = (product: any) => {
        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id)
            if (existingItem) {
                return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
            }
            return [...prev, { ...product, quantity: 1 }]
        })
    }

    const updateCartItem = (id: string, quantity: number) => {
        if (quantity === 0) {
            setCartItems((prev) => prev.filter((item) => item.id !== id))
        } else {
            setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
        }
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    const handleAdvancedSearch = (filters: any) => {
        setSearchFilters(filters)
        setSearchQuery(filters.query)
    }

    const handleResetSearch = () => {
        setSearchFilters(null)
        setSearchQuery("")
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                <CategoryProduct selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} showAll={true} />
                <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                <ListProduct selectedCategory={selectedCategory} searchQuery={searchQuery} onAddToCart={addToCart} searchFilters={searchFilters} />
            </div>
        </>
    )
}
