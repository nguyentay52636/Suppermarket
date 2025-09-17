import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { CartItem as CartItemType } from '@/redux/slices/cartSlice'
import { formatPrice } from '@/lib/utils'

interface ProductInfoProps {
  item: CartItemType
}
export default function ProductInfo({ item }: ProductInfoProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-pretty mb-1 dark:text-white">{item.name}</h3>
          <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">{item.unit}</p>

          <div className="flex items-center space-x-2">
            <span className="text-primary font-bold text-lg">{item.price}</span>
          </div>

          <p className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
            Thành tiền:{" "}
            <span className="font-semibold text-foreground dark:text-white">
              {formatPrice(parseInt(item.price.replace(/\./g, '')) * item.quantity)}
            </span>
          </p>
        </div>

        {/* Wishlist Button */}
        <Button variant="ghost" size="sm" className="p-2">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
