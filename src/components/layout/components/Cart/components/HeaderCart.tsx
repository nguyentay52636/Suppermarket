import { Badge } from '@/components/ui/badge'
import React from 'react'
interface HeaderCartProps {
    getTotalItems: () => number
}
export default function HeaderCart({ getTotalItems }: HeaderCartProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-balance dark:text-white mb-2">Giỏ hàng của bạn</h1>
                <p className="text-muted-foreground dark:text-gray-400">Kiểm tra lại sản phẩm trước khi thanh toán</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary mt-4 sm:mt-0">
                {getTotalItems()} sản phẩm
            </Badge>
        </div>
    )
}
