import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CartItem as CartItemType } from '@/redux/slices/cartSlice'
import { formatPrice } from '@/lib/utils'
import QuantityCartItem from './QuantityCartItem'
import ProductInfo from './ProductInfo'

interface CartItemProps {
    item: CartItemType
    onIncrease: (id: number) => void
    onDecrease: (id: number) => void
    onRemove: (id: number) => void
}
export default function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
    return (
        <>
            <Card
                key={item.id}
                className="overflow-hidden hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700"
            >
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <div className="relative flex-shrink-0">
                            <img
                                src={item.image || "https://cdn.tgdd.vn/Files/2014/09/25/569033/10-loai-trai-cay-cap-cuu-khi-bi-benh1.jpg"}
                                alt={item.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                            />
                        </div>

                        <ProductInfo item={item} />
                        <QuantityCartItem
                            item={item}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onRemove={onRemove}
                        />
                    </div>

                </CardContent>
            </Card>
        </>
    )
}
