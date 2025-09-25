import { ArrowLeft, Link, ShoppingBag, ShoppingCart } from 'lucide-react'
import React from 'react'

export default function HeaderPayment() {
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/cart" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        <span className="font-medium">Quay lại giỏ hàng</span>
                    </Link>

                    <Link href="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        <span className="font-medium">Tiếp tục mua sắm</span>
                    </Link>
                </div>
            </div>
        </header>
    )
}
