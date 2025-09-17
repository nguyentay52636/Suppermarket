import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Tag } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface CouponProps {
    appliedCoupon: { code: string; discount: number } | null
    couponCode: string
    setCouponCode: (code: string) => void
    applyCoupon: () => void
    removeCoupon: () => void
}
export default function Coupon({ appliedCoupon, couponCode, setCouponCode, applyCoupon, removeCoupon }: CouponProps) {
    return (
        <>
            <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center dark:text-white">
                        <Tag className="w-5 h-5 mr-2" />
                        Mã giảm giá
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!appliedCoupon ? (
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Nhập mã giảm giá"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <Button
                                onClick={applyCoupon}
                                variant="outline"
                                className="dark:border-gray-600 dark:text-white bg-transparent"
                            >
                                Áp dụng
                            </Button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                                <Tag className="w-4 h-4 text-green-600 dark:text-green-400" />
                                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                    {appliedCoupon.code}
                                </span>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={removeCoupon}
                                className="text-red-500 hover:text-red-700"
                            >
                                Xóa
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    )
}
