'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addToCart } from '@/redux/slices/cartSlice'
import Cart from '@/components/layout/components/Cart/Cart'
import { ShoppingCart } from 'lucide-react'

const demoProducts = [
    {
        id: 1,
        name: "Táo Fuji nhập khẩu",
        price: "45.000",
        image: "/fresh-red-apples.png",
        unit: "kg"
    },
    {
        id: 2,
        name: "Nước cam Tropicana 1L",
        price: "32.000",
        image: "/orange-juice-bottle.jpg",
        unit: "chai"
    },
    {
        id: 3,
        name: "Sữa tươi TH True Milk 1L",
        price: "28.000",
        image: "/milk-carton-th-true-milk.jpg",
        unit: "hộp"
    },
    {
        id: 4,
        name: "Bánh quy Oreo 137g",
        price: "18.000",
        image: "/oreo-cookies-package.jpg",
        unit: "gói"
    }
]

export default function DemoPage() {
    const dispatch = useAppDispatch()
    const { totalItems } = useAppSelector(state => state.cart)

    const handleAddToCart = (product: typeof demoProducts[0]) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Demo Giỏ Hàng
                    </h1>
                    <Cart>
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Giỏ hàng ({totalItems})
                        </Button>
                    </Cart>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {demoProducts.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <CardHeader className="p-0">
                                <div className="aspect-square relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                                <p className="text-2xl font-bold text-orange-600 mb-4">
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(parseInt(product.price.replace(/\./g, '')))}
                                </p>
                                <p className="text-sm text-gray-500 mb-4">{product.unit}</p>
                                <Button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-full bg-orange-500 hover:bg-orange-600"
                                >
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Thêm vào giỏ
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
