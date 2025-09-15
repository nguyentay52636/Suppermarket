import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Star, Heart, Eye } from "lucide-react"
import { Product } from '../Mock/dataProduct'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/slices/cartSlice'


interface ProductItemProps {
  product: Product
  hoveredProduct: string | null
  onMouseEnter: (productId: string) => void
  onMouseLeave: () => void
}

export default function ProductItem({
  product,
  hoveredProduct,
  onMouseEnter,
  onMouseLeave
}: ProductItemProps) {
  const dispatch = useAppDispatch()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: parseInt(product.id),
      name: product.name,
      price: product.price.toString(),
      image: product.image,
      unit: 'cái'
    }))
  }

  return (
    <Card
      key={product.id}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => onMouseEnter(product.id)}
      onMouseLeave={onMouseLeave}
    >
      <div className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image || "/placeholder.svg?height=200&width=200&query=grocery product"}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Overlay badges and actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-3 right-3 flex flex-col space-y-2">
              <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Discount badge */}
          {product.discount && (
            <Badge
              variant="destructive"
              className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1"
            >
              -{product.discount}%
            </Badge>
          )}

          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <Badge
                variant="secondary"
                className="bg-white text-gray-800 text-xs font-medium px-3 py-1"
              >
                Hết hàng
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 flex flex-col gap-3">
          <h3 className="font-semibold text-sm leading-tight text-gray-800 min-h-[2.5rem] line-clamp-2">
            {product.name}
          </h3>

          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.rating})</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-green-600 text-lg">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            {product.discount && (
              <p className="text-xs text-green-600 font-medium">
                Tiết kiệm {formatPrice(product.originalPrice! - product.price)}
              </p>
            )}
          </div>

          <Button
            className={`w-full flex items-center justify-center gap-1 text-sm font-medium rounded-md py-2 px-3 transition-colors ${product.inStock
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-gray-400 text-white cursor-not-allowed opacity-50"
              }`}
            disabled={!product.inStock}
            onClick={() => product.inStock && handleAddToCart()}
          >
            <Plus className="w-4 h-4" />
            <span>
              {hoveredProduct === product.id ? "Thêm ngay" : "Thêm vào giỏ"}
            </span>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
