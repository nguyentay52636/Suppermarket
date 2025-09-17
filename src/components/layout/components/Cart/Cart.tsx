import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, ShoppingBag, Trash2 } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { clearCart, increaseQuantity, decreaseQuantity, removeFromCart } from '@/redux/slices/cartSlice'
import CartItem from './components/CartItem/CartItem'
import CartTotalPrice from './components/CartTotalPrice'

interface CartProps {
    children: React.ReactNode
}

export default function Cart({ children }: CartProps) {
    const dispatch = useAppDispatch()
    const { items, totalItems, totalPrice } = useAppSelector(state => state.cart)

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price)
    }

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id))
    }

    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id))
    }

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Giỏ hàng của bạn
                        {totalItems > 0 && (
                            <Badge variant="secondary" className="ml-2">
                                {totalItems}
                            </Badge>
                        )}
                    </SheetTitle>
                    <SheetDescription>
                        {totalItems > 0
                            ? `Bạn có ${totalItems} sản phẩm trong giỏ hàng`
                            : 'Giỏ hàng của bạn đang trống'
                        }
                    </SheetDescription>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto py-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                Giỏ hàng trống
                            </h3>
                            <p className="text-gray-500 mb-6">
                                Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    price={item.price}
                                    image={item.image}
                                    unit={item.unit}
                                    quantity={item.quantity}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <CartTotalPrice totalPrice={totalPrice} handleClearCart={handleClearCart} />
                )}
            </SheetContent>
        </Sheet>
    )
}
