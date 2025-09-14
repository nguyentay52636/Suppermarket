"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Apple, Coffee, Milk, Sandwich, Candy, Droplets, Sparkles } from "lucide-react"
import ButtonItemCategory from "./ButtonItemCategory"

interface CategoryFilterProps {
    selectedCategory: string
    onCategoryChange: (category: string) => void
    showAll?: boolean
}

const categories = [
    { id: "all", name: "Tất cả", icon: Sparkles, color: "bg-gray-100 text-gray-700" },
    { id: "fruits", name: "Trái cây", icon: Apple, color: "bg-red-100 text-red-700" },
    { id: "beverages", name: "Đồ uống", icon: Coffee, color: "bg-amber-100 text-amber-700" },
    { id: "dairy", name: "Sữa & Sản phẩm từ sữa", icon: Milk, color: "bg-blue-100 text-blue-700" },
    { id: "snacks", name: "Đồ ăn vặt", icon: Sandwich, color: "bg-orange-100 text-orange-700" },
    { id: "sweets", name: "Kẹo & Bánh", icon: Candy, color: "bg-pink-100 text-pink-700" },
    { id: "water", name: "Nước uống", icon: Droplets, color: "bg-cyan-100 text-cyan-700" },
]

export function CategoryProduct({ selectedCategory, onCategoryChange, showAll = false }: CategoryFilterProps) {
    const displayCategories = showAll ? categories : categories.slice(0, 6)

    if (showAll) {
        return (
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-center">Danh mục sản phẩm</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                    {categories.map((category) => (
                        <ButtonItemCategory
                            key={category.id}
                            category={category}
                            isSelected={selectedCategory === category.id}
                            onClick={() => onCategoryChange(category.id)}
                            variant="grid"
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Danh mục</h2>
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex space-x-3 pb-2">
                    {displayCategories.map((category) => (
                        <ButtonItemCategory
                            key={category.id}
                            category={category}
                            isSelected={selectedCategory === category.id}
                            onClick={() => onCategoryChange(category.id)}
                            variant="horizontal"
                        />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
