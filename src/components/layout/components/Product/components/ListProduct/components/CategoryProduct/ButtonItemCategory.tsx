import React from 'react'
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ButtonItemCategoryProps {
  category: {
    id: string
    name: string
    icon: LucideIcon
    color: string
  }
  isSelected: boolean
  onClick: () => void
  variant?: "grid" | "horizontal"
}

export default function ButtonItemCategory({
  category,
  isSelected,
  onClick,
  variant = "horizontal"
}: ButtonItemCategoryProps) {
  const IconComponent = category.icon

  if (variant === "grid") {
    return (
      <Button
        variant={isSelected ? "default" : "outline"}
        onClick={onClick}
        className={`h-auto cursor-pointer p-6 flex flex-col items-center space-y-3 group hover:shadow-md transition-all ${isSelected
          ? "bg-green-600 text-white border-green-600 cursor-pointer"
          : "hover:bg-gray-50! cursor-pointer border-gray-200"
          }`}
      >
        <div
          className={`w-12 h-12 cursor-pointer rounded-full flex items-center justify-center ${isSelected ? "bg-white/20" : category.color
            }`}
        >
          <IconComponent className={`h-6 w-6 ${isSelected ? "text-white" : ""}`} />
        </div>
        <span className="text-sm font-medium text-center text-pretty leading-tight">
          {category.name}
        </span>
      </Button>
    )
  }

  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`flex cursor-pointer items-center space-x-2 shrink-0 h-10 px-4 ${isSelected
        ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
        : "hover:bg-gray-50 border-gray-200"
        }`}
    >
      <div
        className={`w-5 h-5 rounded-full flex items-center justify-center ${isSelected ? "bg-white/20" : category.color
          }`}
      >
        <IconComponent className={`h-3 w-3 ${isSelected ? "text-white" : ""}`} />
      </div>
      <span className="text-pretty font-medium">{category.name}</span>
    </Button>
  )
}
