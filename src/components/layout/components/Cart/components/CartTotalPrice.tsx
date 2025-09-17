import React from 'react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { Trash2, ShoppingCart } from 'lucide-react'
interface CartTotalPriceProps { 
    totalPrice: number
    handleClearCart: () => void
} 
export default function CartTotalPrice({ totalPrice, handleClearCart }: CartTotalPriceProps) {
    return (
        <>
            <div className="border-t pt-6 space-y-4 px-2">
                <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Tổng cộng:</span>
                    <span className="text-xl font-bold text-orange-600">
                        {formatPrice(totalPrice)}
                    </span>
                </div>  

                <div className="flex p-2">
                    <Button
                        variant="outline"
                        onClick={handleClearCart}
                        className="flex-1 cursor-pointer hover:bg-gray-400 "
                    >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Xóa tất cả
                    </Button>
                    <Button className="flex-1 bg-green-700 mx-2 hover:bg-green-800 cursor-pointer">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Thanh toán
                    </Button>
                </div>
            </div>
        </>
    )
}
