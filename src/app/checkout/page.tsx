"use client"

import { useEffect, useMemo, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { ArrowLeft, CreditCard, ShoppingBag } from 'lucide-react'
import Link from 'next/link'

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

interface AppliedCoupon { code: string; discount: number }

export default function CheckoutPage() {
    const [items, setItems] = useState<CartItem[]>([])
    const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null)

    useEffect(() => {
        try {
            const savedCart = localStorage.getItem('cartItems')
            const savedCoupon = localStorage.getItem('appliedCoupon')
            if (savedCart) setItems(JSON.parse(savedCart))
            if (savedCoupon) setAppliedCoupon(JSON.parse(savedCoupon))
        } catch { }
    }, [])

    const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
    const totalPrice = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])
    const shippingFee = useMemo(() => (totalPrice >= 200000 ? 0 : 25000), [totalPrice])
    const discount = useMemo(() => (appliedCoupon ? (totalPrice * appliedCoupon.discount) / 100 : 0), [appliedCoupon, totalPrice])
    const finalTotal = useMemo(() => totalPrice + shippingFee - discount, [totalPrice, shippingFee, discount])

    return (
        <div className="min-h-screen bg-background dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground dark:text-gray-400 mb-6">
                    <Link href="/cart">
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Quay lại giỏ hàng
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {items.length === 0 ? (
                            <div className="text-center py-16">
                                <ShoppingBag className="h-16 w-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                                <p className="text-lg dark:text-white">Không có sản phẩm để thanh toán</p>
                                <Link href="/">
                                    <Button className="mt-4">Tiếp tục mua sắm</Button>
                                </Link>
                            </div>
                        ) : (
                            items.map((item) => (
                                <Card key={item.id} className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                            <div className="relative flex-shrink-0">
                                                <img
                                                    src={item.image || "/assorted-green-vegetables.png"}
                                                    alt={item.name}
                                                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between">
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg text-pretty mb-1 dark:text-white">{item.name}</h3>
                                                        <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">{item.category}</p>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-primary font-bold text-lg">{formatPrice(item.price)}</span>
                                                            {item.originalPrice && (
                                                                <span className="text-sm text-muted-foreground line-through">
                                                                    {formatPrice(item.originalPrice)}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                                                            Thành tiền: <span className="font-semibold text-foreground dark:text-white">{formatPrice(item.price * item.quantity)}</span>
                                                        </p>
                                                    </div>
                                                    <div className="text-sm dark:text-gray-300">Số lượng: x{item.quantity}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {!item.inStock && (
                                            <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                                <p className="text-sm text-red-600 dark:text-red-400">
                                                    Sản phẩm này hiện đang hết hàng.
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>

                    <div>
                        <Card className="dark:bg-gray-800 dark:border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-xl text-balance dark:text-white">Thanh toán</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="dark:text-gray-300">Tạm tính ({totalItems} sản phẩm):</span>
                                        <span className="font-semibold dark:text-white">{formatPrice(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="dark:text-gray-300">Phí giao hàng:</span>
                                        <span className={shippingFee === 0 ? "text-green-600 dark:text-green-400 font-semibold" : "dark:text-white"}>
                                            {shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}
                                        </span>
                                    </div>
                                    {appliedCoupon && discount > 0 && (
                                        <div className="flex justify-between items-center">
                                            <span className="dark:text-gray-300">Giảm giá ({appliedCoupon.code}):</span>
                                            <span className="text-green-600 dark:text-green-400 font-semibold">-{formatPrice(discount)}</span>
                                        </div>
                                    )}
                                </div>
                                <Separator className="dark:bg-gray-600" />
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span className="dark:text-white">Tổng cộng:</span>
                                    <span className="text-primary">{formatPrice(finalTotal)}</span>
                                </div>
                                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                                    <CreditCard className="w-5 h-5 mr-2" />
                                    Đặt hàng
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}


