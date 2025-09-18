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
                    <div className="flex gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0">
                            <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            {product.discount > 0 && (
                                <Badge className="absolute -top-1 -right-1 bg-red-500 text-xs">-{product.discount}%</Badge>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium mb-1">{product.name}</h3>
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-yellow-400">★</span>
                                <span className="text-sm text-gray-600">{product.rating}</span>
                                <span className="text-xs text-gray-400">({product.sold} đã bán)</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-green-600">{formatPrice(product.price)}</span>
                                    {product.originalPrice > product.price && (
                                        <span className="text-sm text-gray-400 line-through">
                                            {formatPrice(product.originalPrice)}
                                        </span>
                                    )}
                                </div>
                                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                    Thêm vào giỏ
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
