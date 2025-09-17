import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { formatPrice } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

interface OrderSummaryProps {
  getTotalItems: () => number
  getTotalPrice: () => number
  getShippingFee: () => number
  getDiscount: () => number
  getFinalTotal: () => number
  appliedCoupon: { code: string; discount: number } | null
}
export default function OrderSummary({
  getTotalItems,
  getTotalPrice,
  getShippingFee,
  getDiscount,
  getFinalTotal,
  appliedCoupon
}: OrderSummaryProps) {
  const router = useRouter()
  return (
    <>
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-xl text-balance dark:text-white">Tóm tắt đơn hàng</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-300">Tạm tính ({getTotalItems()} sản phẩm):</span>
              <span className="font-semibold dark:text-white">{formatPrice(getTotalPrice())}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="dark:text-gray-300">Phí giao hàng:</span>
              <span
                className={
                  getShippingFee() === 0 ? "text-green-600 dark:text-green-400 font-semibold" : "dark:text-white"
                }
              >
                {getShippingFee() === 0 ? "Miễn phí" : formatPrice(getShippingFee())}
              </span>
            </div>

            {appliedCoupon && getDiscount() > 0 && (
              <div className="flex justify-between items-center">
                <span className="dark:text-gray-300">Giảm giá:</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  -{formatPrice(getDiscount())}
                </span>
              </div>
            )}

            {getTotalPrice() < 200000 && (
              <div className="text-sm text-muted-foreground dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                Mua thêm {formatPrice(200000 - getTotalPrice())} để được miễn phí giao hàng
              </div>
            )}
          </div>

          <Separator className="dark:bg-gray-600" />

          <div className="flex justify-between items-center text-lg font-bold">
            <span className="dark:text-white">Tổng cộng:</span>
            <span className="text-primary">{formatPrice(getFinalTotal())}</span>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              className="w-full h-12 bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground font-semibold"
              size="lg"
              onClick={() => router.push('/checkout')}
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Xác nhận mua hàng
            </Button>
            <Button variant="outline" className="w-full hover:bg-gray-300 h-12 cursor-pointer dark:border-gray-600 dark:text-white bg-transparent">
              Tiếp tục mua sắm
            </Button>
          </div>
        </CardContent>
      </Card>

    </>
  )
}
