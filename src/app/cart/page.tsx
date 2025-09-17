"use client"

import { useEffect, useState } from "react"
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '@/redux/slices/cartSlice'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart } from "lucide-react"
import HeaderCart from "@/components/layout/components/Cart/components/HeaderCart"
import CartItem from "@/components/layout/components/Cart/components/CartItem/CartItem"
import Summary from "@/components/layout/components/Cart/components/Summary/Summary"

export default function CartPage() {
    const dispatch = useAppDispatch()
    const { items: cartItems, totalItems, totalPrice } = useAppSelector(state => state.cart)

    const [couponCode, setCouponCode] = useState("")
    const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null)

    useEffect(() => {
        try {
            const savedCoupon = localStorage.getItem('appliedCoupon')
            if (savedCoupon) {
                const parsedCoupon = JSON.parse(savedCoupon)
                if (parsedCoupon && typeof parsedCoupon === 'object') setAppliedCoupon(parsedCoupon)
            }
        } catch { }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem('appliedCoupon', JSON.stringify(appliedCoupon))
        } catch { }
    }, [appliedCoupon])

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id))
    }

    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id))
    }

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const getTotalPrice = () => {
        return totalPrice
    }

    const getTotalItems = () => {
        return totalItems
    }

    const getShippingFee = () => {
        return getTotalPrice() >= 200000 ? 0 : 25000
    }

    const getDiscount = () => {
        return appliedCoupon ? (getTotalPrice() * appliedCoupon.discount) / 100 : 0
    }

    const getFinalTotal = () => {
        return getTotalPrice() + getShippingFee() - getDiscount()
    }

    const applyCoupon = () => {
        // Sample coupon logic
        if (couponCode === "SAVE10") {
            setAppliedCoupon({ code: couponCode, discount: 10 })
            setCouponCode("")
        } else if (couponCode === "FREESHIP") {
            setAppliedCoupon({ code: couponCode, discount: 0 })
            setCouponCode("")
        }
    }

    const removeCoupon = () => {
        setAppliedCoupon(null)
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-background dark:bg-gray-900">
                <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                    <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-8">
                        <ShoppingBag className="h-16 w-16 text-gray-400 dark:text-gray-600" />
                    </div>
                    <h1 className="text-3xl font-bold mb-4 text-balance dark:text-white">Giỏ hàng trống</h1>
                    <p className="text-lg text-muted-foreground dark:text-gray-400 mb-8 text-pretty">
                        Hãy thêm sản phẩm vào giỏ hàng để bắt đầu mua sắm cùng Bách Hóa Xanh
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <ShoppingBag className="w-5 h-5 mr-2" />
                        Tiếp tục mua sắm
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background dark:bg-gray-900">

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-400 mb-6">
                    <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Tiếp tục mua sắm
                    </Button>
                </div>
                <HeaderCart getTotalItems={getTotalItems} />

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={handleIncrease}
                                onDecrease={handleDecrease}
                                onRemove={handleRemove}
                            />
                        ))}
                    </div>

                    {/* Order Summary */}
                    <Summary
                        appliedCoupon={appliedCoupon}
                        couponCode={couponCode}
                        setCouponCode={setCouponCode}
                        applyCoupon={applyCoupon}
                        removeCoupon={removeCoupon}
                        getTotalItems={getTotalItems}
                        getTotalPrice={getTotalPrice}
                        getShippingFee={getShippingFee}
                        getDiscount={getDiscount}
                        getFinalTotal={getFinalTotal}
                    />
                </div>
            </div>

        </div>
    )
}
