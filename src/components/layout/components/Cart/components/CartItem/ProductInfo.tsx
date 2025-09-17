import React from 'react'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { CartItem as CartItemType } from '../mock'
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
            Thành tiền:{" "}
            <span className="font-semibold text-foreground dark:text-white">
              {formatPrice(item.price * item.quantity)}
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
