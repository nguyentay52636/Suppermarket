"use client"

import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, Heart } from "lucide-react"
import HeaderCart from "@/components/layout/components/Cart/components/HeaderCart"
import CartItem from "@/components/layout/components/Cart/components/CartItem/CartItem"
import Summary from "@/components/layout/components/Cart/components/Summary/Summary"

interface CartItem {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    quantity: number
    category: string
    inStock: boolean
}

export default function CartPage() {
    // Sample cart data - in real app this would come from state management
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: "1",
            name: "Gạo ST25 túi 5kg",
            price: 125000,
            originalPrice: 150000,
            image: "/rice-bag.png",
            quantity: 2,
            category: "Thực phẩm khô",
            inStock: true,
        },
        {
            id: "2",
            name: "Thịt heo ba chỉ 500g",
            price: 85000,
            image: "/pork-meat.jpg",
            quantity: 1,
            category: "Thịt tươi",
            inStock: true,
        },
        {
            id: "3",
            name: "Rau cải ngọt 300g",
            price: 15000,
            image: "/assorted-green-vegetables.png",
            quantity: 3,
            category: "Rau củ",
            inStock: false,
        },
    ])

    const [couponCode, setCouponCode] = useState("")
    const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null)



    const updateCartItem = (id: string, quantity: number) => {
        if (quantity === 0) {
            setCartItems((prev) => prev.filter((item) => item.id !== id))
        } else {
            setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
        }
    }

    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
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
                            <CartItem item={item} />
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
