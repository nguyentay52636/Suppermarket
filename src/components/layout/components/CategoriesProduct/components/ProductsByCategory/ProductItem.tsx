import { Card } from '@/components/ui/card'
import React from 'react'
import { CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'

interface ProductItemProps {
    id: number
    name: string
    price: string
    originalPrice?: string
    unit: string
    image: string
    discount?: number
    rating?: number
    sold?: number
    product: any
}
export default function ProductItem({ product }: ProductItemProps) {
    return (
        <>
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                    <div className="relative mb-3">
                        <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        {product.discount > 0 && (
                            <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                        )}
                    </div>
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-xs text-gray-400">({product.sold} đã bán)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-green-600">{formatPrice(product.price)}</span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                    </div>
                    <Button className="w-full bg-green-700 hover:bg-green-800 cursor-pointer">Thêm vào giỏ</Button>
                </CardContent>
            </Card>
        </>
    )
}
