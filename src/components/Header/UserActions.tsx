import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useAppSelector } from '@/redux/hooks'
import Cart from '@/components/layout/components/Cart/Cart'

export default function UserActions() {
    const { totalItems } = useAppSelector(state => state.cart)

    return (
        <>
            <Cart>
                <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-orange-600 relative cursor-pointer bg-orange-500 rounded-xl px-6! py-6!"
                >
                    <ShoppingCart className="h-10 w-10" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </Button>
            </Cart>
        </>
    )
}

