"use client"

import { useState } from "react"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { clearCart } from "@/redux/slices/cartSlice"
import HeaderPayment from "./components/HeaderPayment"
import StepPayment from "./components/StepPayment"
import InfomationPayment from "./components/InfomationPayment/InfomationPayment"
import OrderSumary from "./components/OrderSumary/OrderSumary"



const savedAddresses = [
    {
        id: 1,
        type: "home",
        label: "Nhà riêng",
        name: "Nguyễn Văn A",
        phone: "0901234567",
        address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",
        isDefault: true,
    },
    {
        id: 2,
        type: "office",
        label: "Văn phòng",
        name: "Nguyễn Văn A",
        phone: "0901234567",
        address: "456 Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM",
        isDefault: false,
    },
    {
        id: 3,
        type: "other",
        label: "Nhà bạn bè",
        name: "Trần Thị B",
        phone: "0907654321",
        address: "789 Võ Văn Tần, Phường 6, Quận 3, TP.HCM",
        isDefault: false,
    },
]

const savedBillingAddresses = [
    {
        id: 1,
        type: "home",
        label: "Địa chỉ cá nhân",
        name: "Nguyễn Văn A",
        address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM",
        isDefault: true,
    },
    {
        id: 2,
        type: "office",
        label: "Địa chỉ công ty",
        name: "Công ty TNHH ABC",
        address: "456 Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM",
        taxCode: "0123456789",
        isDefault: false,
    },
]

export default function Payment() {
    const cartItems = useAppSelector((state) => state.cart.items)
    const dispatch = useAppDispatch()

    const [currentStep, setCurrentStep] = useState(2)
    const [deliveryMethod, setDeliveryMethod] = useState("standard")
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const [couponCode, setCouponCode] = useState("")
    const [appliedCoupon, setAppliedCoupon] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState("1")
    const [selectedBillingAddress, setSelectedBillingAddress] = useState("1")
    const [showNewAddress, setShowNewAddress] = useState(false)
    const [showNewBillingAddress, setShowNewBillingAddress] = useState(false)
    const [sameAsBilling, setSameAsBilling] = useState(true)
    const [showSuccess, setShowSuccess] = useState(false)
    const [orderDetails, setOrderDetails] = useState({
        orderId: "",
        total: 0,
        paymentMethod: "",
        deliveryAddress: "",
        estimatedDelivery: "",
    })

    const subtotal = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
    const shippingFee = deliveryMethod === "express" ? 25000 : 15000
    const discount = appliedCoupon ? 20000 : 0
    const total = subtotal + shippingFee - discount

    const applyCoupon = () => {
        if (couponCode.toLowerCase() === "bachhoaxanh") {
            setAppliedCoupon(true)
        }
    }

    const handleCheckout = () => {
        const selectedAddressData = savedAddresses.find((addr) => addr.id.toString() === selectedAddress)
        const orderId = `BHX${Date.now().toString().slice(-6)}`

        const paymentMethodNames = {
            cod: "Thanh toán khi nhận hàng (COD)",
            card: "Thẻ tín dụng/ghi nợ",
            momo: "Ví MoMo",
            zalopay: "ZaloPay",
            vnpay: "VNPay",
            banking: "Internet Banking",
        }

        const estimatedDelivery = deliveryMethod === "express" ? "Trong 24 giờ" : "2-3 ngày làm việc"

        setOrderDetails({
            orderId,
            total,
            paymentMethod: paymentMethodNames[paymentMethod as keyof typeof paymentMethodNames],
            deliveryAddress: selectedAddressData?.address || "Địa chỉ đã chọn",
            estimatedDelivery,
        })

        setShowSuccess(true)
        dispatch(clearCart())
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
            <HeaderPayment />
            <StepPayment />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <InfomationPayment />
                    <OrderSumary
                        cartItems={cartItems}
                        couponCode={couponCode}
                        setCouponCode={setCouponCode}
                        appliedCoupon={appliedCoupon}
                        applyCoupon={applyCoupon}
                        onCheckout={handleCheckout}
                        subtotal={subtotal}
                        shippingFee={shippingFee}
                        discount={discount}
                        total={total}
                    />

                </div>
            </div>

            {/* <SuccessNotification isOpen={showSuccess} onClose={() => setShowSuccess(false)} orderDetails={orderDetails} /> */}
        </div>
    )
}

