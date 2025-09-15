import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/slices/cartSlice'

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
}

export default function ProductItem({
    id,
    name,
    price,
    originalPrice,
    unit,
    image,
    discount,
    rating,
    sold
}: ProductItemProps) {
    const dispatch = useAppDispatch()

    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(parseInt(price.replace(/\./g, '')))
    }

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            price,
            image,
            unit
        }))
    }

    return (
        <Card className="group hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
                <div className="relative">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    {discount && discount > 0 && (
                        <Badge className="absolute top-2 left-2 bg-red-500">
                            -{discount}%
                        </Badge>
                    )}
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                        {name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-orange-600 font-bold text-lg">
                            {formatPrice(price)}
                        </span>
                        {originalPrice && (
                            <span className="text-gray-500 text-sm line-through">
                                {formatPrice(originalPrice)}
                            </span>
                        )}
                    </div>

                    <p className="text-gray-500 text-sm mb-2">{unit}</p>

                    {rating && (
                        <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{rating}</span>
                            {sold && (
                                <span className="text-sm text-gray-500">({sold} đã bán)</span>
                            )}
                        </div>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Thêm vào giỏ
                </Button>
            </CardFooter>
        </Card>
    )
}
