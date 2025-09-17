import React from 'react'
import Coupon from './Coupon'
import OrderSummary from './OrderSummary'
import Benefits from './Benefits'

interface SummaryProps {
  appliedCoupon: { code: string; discount: number } | null
  couponCode: string
  setCouponCode: (code: string) => void
  applyCoupon: () => void
  removeCoupon: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getShippingFee: () => number
  getDiscount: () => number
  getFinalTotal: () => number
}

export default function Summary({
  appliedCoupon,
  couponCode,
  setCouponCode,
  applyCoupon,
  removeCoupon,
  getTotalItems,
  getTotalPrice,
  getShippingFee,
  getDiscount,
  getFinalTotal
}: SummaryProps) {
  return (
    <>
      <div className="space-y-6">
        <Coupon
          appliedCoupon={appliedCoupon}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          applyCoupon={applyCoupon}
          removeCoupon={removeCoupon}
        />

        <OrderSummary
          getTotalItems={getTotalItems}
          getTotalPrice={getTotalPrice}
          getShippingFee={getShippingFee}
          getDiscount={getDiscount}
          getFinalTotal={getFinalTotal}
          appliedCoupon={appliedCoupon}
        />

        <Benefits />
      </div>
    </>
  )
}
