import React from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface CartItemProps {
    id: number
    name: string
    price: string
    image: string
    unit: string
    quantity: number
    onIncrease: (id: number) => void
    onDecrease: (id: number) => void
    onRemove: (id: number) => void
}

export default function CartItem({
    id,
    name,
    price,
    image,
    unit,
    quantity,
    onIncrease,
    onDecrease,
    onRemove
}: CartItemProps) {
    const formatPrice = (price: string) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(parseInt(price.replace(/\./g, '')))
    }

    return (
        <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
            <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                    {name}
                </h3>
                <p className="text-sm text-gray-500">{unit}</p>
                <p className="text-sm font-semibold text-orange-600">
                    {formatPrice(price)}
                </p>
            </div>

            <div className="flex items-center space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onDecrease(id)}
                    className="h-8 w-8 p-0"
                >
                    <Minus className="h-4 w-4" />
                </Button>

                <span className="text-sm font-medium w-8 text-center">
                    {quantity}
                </span>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onIncrease(id)}
                    className="h-8 w-8 p-0"
                >
                    <Plus className="h-4 w-4" />
                </Button>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onRemove(id)}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
