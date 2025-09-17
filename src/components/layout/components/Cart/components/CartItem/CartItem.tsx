import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CartItem as CartItemType } from '../mock'
import { formatPrice } from '@/lib/utils'
import QuantityCartItem from './QuantityCartItem'
import ProductInfo from './ProductInfo'

interface CartItemProps {
    item: CartItemType
}
export default function CartItem({ item }: CartItemProps) {
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
                            {!item.inStock && (
                                <div className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center">
                                    <div className="bg-white px-2 py-1 rounded border border-red-600">
                                        <span className="text-red-600 text-xs font-semibold">Hết hàng</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <ProductInfo item={item} />
                        <QuantityCartItem item={item} />
                    </div>

                    {!item.inStock && (
                        <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <p className="text-sm text-red-600 dark:text-red-400">
                                Sản phẩm này hiện đang hết hàng. Vui lòng xóa khỏi giỏ hàng hoặc thay thế bằng sản phẩm khác.
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    )
}
