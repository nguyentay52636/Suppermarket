import React from 'react'
import { Button } from '@/components/ui/button'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { CartItem as CartItemType } from '@/redux/slices/cartSlice'

interface QuantityCartItemProps {
    item: CartItemType
    onIncrease: (id: number) => void
    onDecrease: (id: number) => void
    onRemove: (id: number) => void
}

export default function QuantityCartItem({ item, onIncrease, onDecrease, onRemove }: QuantityCartItemProps) {
    return (
        <>
            <div className="flex items-center justify-between sm:justify-end space-x-4">
                <div className="flex items-center border rounded-lg dark:border-gray-600">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-10 w-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => onDecrease(item.id)}
                    >
                        <Minus className="h-4 w-4" />
                    </Button>

                    <span className="w-12 text-center font-semibold dark:text-white">{item.quantity}</span>

                    <Button
                        size="sm"
                        variant="ghost"
                        className="h-10 w-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => onIncrease(item.id)}
                    >
                        <Plus className="h-4 w-4" />
                    </Button>
                </div>

                <Button
                    size="sm"
                    variant="ghost"
                    className="h-10 w-10 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    onClick={() => onRemove(item.id)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}
