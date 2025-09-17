import { Card, CardContent } from '@/components/ui/card'
import { Truck, Shield, CreditCard } from 'lucide-react'
import React from 'react'

export default function Benefits() {
  return (
    <>
      <Card className="dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="p-4 space-y-3">
          <div className="flex items-center space-x-3 text-sm">
            <Truck className="w-5 h-5 text-primary" />
            <span className="dark:text-gray-300">Giao hàng nhanh trong 30 phút</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="dark:text-gray-300">Đảm bảo chất lượng 100%</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="dark:text-gray-300">Thanh toán an toàn, bảo mật</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
