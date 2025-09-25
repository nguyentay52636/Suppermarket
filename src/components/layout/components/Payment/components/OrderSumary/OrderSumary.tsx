import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ShoppingBag, Plus } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tag } from 'lucide-react'
import { Check } from 'lucide-react'
import BtnStyle from '@/lib/ButtonStyle/BtnStyle'
import CartItems from './CartItems'
import { CartItem } from '@/redux/slices/cartSlice'

interface OrderSumaryProps {
    cartItems: CartItem[]
    couponCode: string
    setCouponCode: (code: string) => void
    appliedCoupon: boolean
    applyCoupon: () => void
    onCheckout: () => void
    subtotal: number
    shippingFee: number
    discount: number
    total: number
}
export default function OrderSumary({    cartItems, couponCode, setCouponCode, appliedCoupon, applyCoupon, onCheckout, subtotal, shippingFee, discount, total }: OrderSumaryProps) {
    return (
        <div className="lg:col-span-1">
            <div className="sticky top-4">
                <Card className="shadow-lg border-green-100">
                    <CardHeader className="bg-green-600 text-white rounded-t-lg">
                        <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center">
                                <ShoppingBag className="h-5 w-5 mr-2" />
                                Đơn hàng của bạn
                            </div>
                            <Link
                                href="/"
                                className="text-white hover:text-green-100 text-sm flex items-center transition-colors"
                            >
                                <Plus className="h-4 w-4 mr-1" />
                                Thêm sản phẩm
                            </Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-4 mb-6">
                            <CartItems cartItems={cartItems} />
                        </div>


                        <Separator className="my-4" />

                        {/* Coupon */}
                        <div className="mb-4">
                            <Label htmlFor="coupon" className="text-sm font-medium text-gray-700">
                                Mã giảm giá
                            </Label>
                            <div className="flex mt-1">
                                <Input
                                    id="coupon"
                                    placeholder="Nhập mã giảm giá"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    className="rounded-r-none focus:ring-green-500 focus:border-green-500"
                                    disabled={appliedCoupon}
                                />
                                <Button
                                    onClick={applyCoupon}
                                    disabled={appliedCoupon || !couponCode}
                                    className="rounded-l-none bg-green-600 hover:bg-green-700"
                                >
                                    <Tag className="h-4 w-4" />
                                </Button>
                            </div>
                            {appliedCoupon && (
                                <p className="text-sm text-green-600 mt-1 flex items-center">
                                    <Check className="h-4 w-4 mr-1" />
                                    Mã giảm giá đã được áp dụng
                                </p>
                            )}
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Tạm tính</span>
                                <span className="text-gray-900">{subtotal.toLocaleString("vi-VN")}đ</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Phí vận chuyển</span>
                                <span className="text-gray-900">{shippingFee.toLocaleString("vi-VN")}đ</span>
                            </div>
                            {appliedCoupon && (
                                <div className="flex justify-between text-green-600">
                                    <span>Giảm giá</span>
                                    <span>-{discount.toLocaleString("vi-VN")}đ</span>
                                </div>
                            )}
                        </div>

                        <Separator className="my-4" />

                        <div className="flex justify-between text-lg font-semibold">
                            <span className="text-gray-900">Tổng cộng</span>
                            <span className="text-green-600">{total.toLocaleString("vi-VN")}đ</span>
                        </div>


                        <BtnStyle successText="Đã đặt hàng" onComplete={onCheckout}>
                            Đặt hàng ngay
                        </BtnStyle>

                        <p className="text-xs text-gray-500 text-center mt-3">
                            Bằng việc đặt hàng, bạn đồng ý với{" "}
                            <Link href="/terms" className="text-green-600 hover:underline">
                                Điều khoản sử dụng
                            </Link>{" "}
                            của chúng tôi
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
