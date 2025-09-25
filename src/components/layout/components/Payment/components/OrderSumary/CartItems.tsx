import { CartItem } from '@/redux/slices/cartSlice'
import React from 'react'
interface CartItemsProps {
    cartItems: CartItem[]
}
export default function CartItems({ cartItems }: CartItemsProps) {
    return (
        <>
            {
                cartItems.map((item: CartItem, index: number) => (
                    <div key={item.id} className="flex items-center space-x-3">
                        <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                            <p className="text-sm text-gray-600">SL: {item.quantity}</p>
                        </div>
                        {/* <p className="text-sm font-medium text-gray-900">
            {(item.price * item.quantity).toLocaleString("vi-VN")}đ
        </p> */}
                    </div>
                ))
            }
        </>

    )
}
