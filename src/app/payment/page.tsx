"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
    MapPin,
    Clock,
    CreditCard,
    Wallet,
    Truck,
    ShoppingBag,
    Tag,
    ArrowLeft,
    Check,
    User,
    Plus,
    Home,
    Building,
    Globe,
    ShoppingCart,
    Edit3,
    Trash2,
} from "lucide-react"
import Link from "next/link"
import { useAppSelector, useAppDispatch } from "@/lib/hooks"
import { clearCart } from "@/lib/store"
import { SuccessNotification } from "@/components/success-notification"

const steps = [
    { id: 1, name: "Giỏ hàng", completed: true },
    { id: 2, name: "Thông tin", completed: false, current: true },
    { id: 3, name: "Thanh toán", completed: false },
    { id: 4, name: "Xác nhận", completed: false },
]

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

export default function page() {
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

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
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
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/cart" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            <span className="font-medium">Quay lại giỏ hàng</span>
                        </Link>
                        <div className="flex items-center space-x-2">
                            <ShoppingBag className="h-6 w-6 text-green-600" />
                            <span className="text-xl font-bold text-gray-900">Bách Hóa Xanh</span>
                        </div>
                        <Link href="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            <span className="font-medium">Tiếp tục mua sắm</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Progress Steps */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav aria-label="Progress">
                        <ol className="flex items-center justify-center space-x-8">
                            {steps.map((step, stepIdx) => (
                                <li key={step.name} className="flex items-center">
                                    <div className="flex items-center">
                                        <div
                                            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${step.completed
                                                    ? "bg-green-600 border-green-600 text-white"
                                                    : step.current
                                                        ? "border-green-600 text-green-600 bg-white"
                                                        : "border-gray-300 text-gray-500 bg-white"
                                                }`}
                                        >
                                            {step.completed ? (
                                                <Check className="h-4 w-4" />
                                            ) : (
                                                <span className="text-sm font-medium">{step.id}</span>
                                            )}
                                        </div>
                                        <span
                                            className={`ml-2 text-sm font-medium ${step.current ? "text-green-600" : step.completed ? "text-green-600" : "text-gray-500"
                                                }`}
                                        >
                                            {step.name}
                                        </span>
                                    </div>
                                    {stepIdx < steps.length - 1 && (
                                        <div className={`ml-8 w-16 h-0.5 ${step.completed ? "bg-green-600" : "bg-gray-300"}`} />
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Customer Information */}
                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center text-gray-900">
                                    <User className="h-5 w-5 mr-2 text-green-600" />
                                    Thông tin khách hàng
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="fullName" className="text-gray-700">
                                            Họ và tên *
                                        </Label>
                                        <Input
                                            id="fullName"
                                            placeholder="Nhập họ và tên"
                                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone" className="text-gray-700">
                                            Số điện thoại *
                                        </Label>
                                        <Input
                                            id="phone"
                                            placeholder="Nhập số điện thoại"
                                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email" className="text-gray-700">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Nhập email (không bắt buộc)"
                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center justify-between text-gray-900">
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                                        Địa chỉ giao hàng
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setShowNewAddress(!showNewAddress)}
                                        className="text-green-600 border-green-600 hover:bg-green-50"
                                    >
                                        <Plus className="h-4 w-4 mr-1" />
                                        Thêm địa chỉ mới
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                                    <div className="space-y-3">
                                        {savedAddresses.map((address) => (
                                            <div
                                                key={address.id}
                                                className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-all ${selectedAddress === address.id.toString()
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem
                                                    value={address.id.toString()}
                                                    id={`address-${address.id}`}
                                                    className="text-green-600 mt-1"
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center space-x-2">
                                                            {address.type === "home" ? (
                                                                <Home className="h-4 w-4 text-gray-500" />
                                                            ) : address.type === "office" ? (
                                                                <Building className="h-4 w-4 text-gray-500" />
                                                            ) : (
                                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                            )}
                                                            <Label
                                                                htmlFor={`address-${address.id}`}
                                                                className="font-medium text-gray-900 cursor-pointer"
                                                            >
                                                                {address.label}
                                                            </Label>
                                                            {address.isDefault && (
                                                                <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                                                    Mặc định
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 text-gray-400 hover:text-green-600"
                                                            >
                                                                <Edit3 className="h-3 w-3" />
                                                            </Button>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                className="h-8 w-8 p-0 text-gray-400 hover:text-red-600"
                                                            >
                                                                <Trash2 className="h-3 w-3" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        {address.name} • {address.phone}
                                                    </p>
                                                    <p className="text-sm text-gray-600">{address.address}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </RadioGroup>

                                {/* Form địa chỉ mới */}
                                {showNewAddress && (
                                    <div className="mt-6 p-4 border-2 border-dashed border-green-200 rounded-lg bg-green-50/50">
                                        <h4 className="font-medium text-gray-900 mb-4">Thêm địa chỉ mới</h4>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="newAddressName" className="text-gray-700">
                                                        Tên người nhận *
                                                    </Label>
                                                    <Input
                                                        id="newAddressName"
                                                        placeholder="Nhập tên người nhận"
                                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="newAddressPhone" className="text-gray-700">
                                                        Số điện thoại *
                                                    </Label>
                                                    <Input
                                                        id="newAddressPhone"
                                                        placeholder="Nhập số điện thoại"
                                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <Label htmlFor="newAddress" className="text-gray-700">
                                                    Địa chỉ cụ thể *
                                                </Label>
                                                <Input
                                                    id="newAddress"
                                                    placeholder="Số nhà, tên đường"
                                                    className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <Label htmlFor="ward" className="text-gray-700">
                                                        Phường/Xã *
                                                    </Label>
                                                    <Input
                                                        id="ward"
                                                        placeholder="Chọn phường/xã"
                                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="district" className="text-gray-700">
                                                        Quận/Huyện *
                                                    </Label>
                                                    <Input
                                                        id="district"
                                                        placeholder="Chọn quận/huyện"
                                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="city" className="text-gray-700">
                                                        Tỉnh/Thành phố *
                                                    </Label>
                                                    <Input
                                                        id="city"
                                                        placeholder="Chọn tỉnh/thành phố"
                                                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="setAsDefault" className="text-green-600" />
                                                <Label htmlFor="setAsDefault" className="text-gray-700 cursor-pointer">
                                                    Đặt làm địa chỉ mặc định
                                                </Label>
                                            </div>
                                            <div className="flex space-x-3">
                                                <Button className="bg-green-600 hover:bg-green-700 text-white">Lưu địa chỉ</Button>
                                                <Button variant="outline" onClick={() => setShowNewAddress(false)}>
                                                    Hủy
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center justify-between text-gray-900">
                                    <div className="flex items-center">
                                        <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                                        Địa chỉ thanh toán
                                    </div>
                                    {!sameAsBilling && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setShowNewBillingAddress(!showNewBillingAddress)}
                                            className="text-green-600 border-green-600 hover:bg-green-50"
                                        >
                                            <Plus className="h-4 w-4 mr-1" />
                                            Thêm địa chỉ thanh toán
                                        </Button>
                                    )}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="sameAsBilling"
                                        checked={sameAsBilling}
                                        onCheckedChange={setSameAsBilling}
                                        className="text-green-600"
                                    />
                                    <Label htmlFor="sameAsBilling" className="text-gray-700 cursor-pointer">
                                        Địa chỉ thanh toán giống địa chỉ giao hàng
                                    </Label>
                                </div>

                                {!sameAsBilling && (
                                    <div className="space-y-4">
                                        <RadioGroup value={selectedBillingAddress} onValueChange={setSelectedBillingAddress}>
                                            <div className="space-y-3">
                                                {savedBillingAddresses.map((address) => (
                                                    <div
                                                        key={address.id}
                                                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-all ${selectedBillingAddress === address.id.toString()
                                                                ? "border-green-500 bg-green-50"
                                                                : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                            }`}
                                                    >
                                                        <RadioGroupItem
                                                            value={address.id.toString()}
                                                            id={`billing-${address.id}`}
                                                            className="text-green-600 mt-1"
                                                        />
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div className="flex items-center space-x-2">
                                                                    {address.type === "home" ? (
                                                                        <Home className="h-4 w-4 text-gray-500" />
                                                                    ) : (
                                                                        <Building className="h-4 w-4 text-gray-500" />
                                                                    )}
                                                                    <Label
                                                                        htmlFor={`billing-${address.id}`}
                                                                        className="font-medium text-gray-900 cursor-pointer"
                                                                    >
                                                                        {address.label}
                                                                    </Label>
                                                                    {address.isDefault && (
                                                                        <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                                                            Mặc định
                                                                        </Badge>
                                                                    )}
                                                                </div>
                                                                <div className="flex items-center space-x-1">
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 w-8 p-0 text-gray-400 hover:text-green-600"
                                                                    >
                                                                        <Edit3 className="h-3 w-3" />
                                                                    </Button>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        className="h-8 w-8 p-0 text-gray-400 hover:text-red-600"
                                                                    >
                                                                        <Trash2 className="h-3 w-3" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                            <p className="text-sm text-gray-600 mb-1">{address.name}</p>
                                                            <p className="text-sm text-gray-600">{address.address}</p>
                                                            {address.taxCode && <p className="text-sm text-gray-500 mt-1">MST: {address.taxCode}</p>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </RadioGroup>

                                        {/* Form địa chỉ thanh toán mới */}
                                        {showNewBillingAddress && (
                                            <div className="mt-4 p-4 border-2 border-dashed border-green-200 rounded-lg bg-green-50/50">
                                                <h4 className="font-medium text-gray-900 mb-4">Thêm địa chỉ thanh toán mới</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="billingName" className="text-gray-700">
                                                            Tên/Tên công ty *
                                                        </Label>
                                                        <Input
                                                            id="billingName"
                                                            placeholder="Nhập tên hoặc tên công ty"
                                                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="billingAddress" className="text-gray-700">
                                                            Địa chỉ thanh toán *
                                                        </Label>
                                                        <Input
                                                            id="billingAddress"
                                                            placeholder="Số nhà, tên đường"
                                                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div>
                                                            <Label htmlFor="billingWard" className="text-gray-700">
                                                                Phường/Xã *
                                                            </Label>
                                                            <Input
                                                                id="billingWard"
                                                                placeholder="Chọn phường/xã"
                                                                className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="billingDistrict" className="text-gray-700">
                                                                Quận/Huyện *
                                                            </Label>
                                                            <Input
                                                                id="billingDistrict"
                                                                placeholder="Chọn quận/huyện"
                                                                className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="billingCity" className="text-gray-700">
                                                                Tỉnh/Thành phố *
                                                            </Label>
                                                            <Input
                                                                id="billingCity"
                                                                placeholder="Chọn tỉnh/thành phố"
                                                                className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="taxCode" className="text-gray-700">
                                                            Mã số thuế (nếu có)
                                                        </Label>
                                                        <Input
                                                            id="taxCode"
                                                            placeholder="Nhập mã số thuế"
                                                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                                                        />
                                                    </div>
                                                    <div className="flex space-x-3">
                                                        <Button className="bg-green-600 hover:bg-green-700 text-white">
                                                            Lưu địa chỉ thanh toán
                                                        </Button>
                                                        <Button variant="outline" onClick={() => setShowNewBillingAddress(false)}>
                                                            Hủy
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Delivery Time */}
                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center text-gray-900">
                                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                                    Thời gian giao hàng
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50 transition-colors">
                                            <RadioGroupItem value="standard" id="standard" className="text-green-600" />
                                            <div className="flex-1">
                                                <Label htmlFor="standard" className="font-medium text-gray-900 cursor-pointer">
                                                    Giao hàng tiêu chuẩn
                                                </Label>
                                                <p className="text-sm text-gray-600">Giao trong 2-3 ngày • Phí ship: 15.000đ</p>
                                            </div>
                                            <Truck className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50 transition-colors">
                                            <RadioGroupItem value="express" id="express" className="text-green-600" />
                                            <div className="flex-1">
                                                <Label htmlFor="express" className="font-medium text-gray-900 cursor-pointer">
                                                    Giao hàng nhanh
                                                </Label>
                                                <p className="text-sm text-gray-600">Giao trong 24h • Phí ship: 25.000đ</p>
                                            </div>
                                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                                                Nhanh
                                            </Badge>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center text-gray-900">
                                    <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                                    Phương thức thanh toán
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                                    <div className="space-y-4">
                                        {/* Thanh toán offline */}
                                        <div className="space-y-3">
                                            <h4 className="font-medium text-gray-900 flex items-center border-b pb-2">
                                                <Wallet className="h-4 w-4 mr-2 text-green-600" />
                                                Thanh toán khi nhận hàng
                                            </h4>
                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "cod"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="cod" id="cod" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="cod" className="font-medium text-gray-900 cursor-pointer">
                                                        Thanh toán tiền mặt (COD)
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Thanh toán bằng tiền mặt khi nhận hàng</p>
                                                </div>
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                    <Wallet className="h-5 w-5 text-green-600" />
                                                </div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Thanh toán online */}
                                        <div className="space-y-3">
                                            <h4 className="font-medium text-gray-900 flex items-center border-b pb-2">
                                                <Globe className="h-4 w-4 mr-2 text-green-600" />
                                                Thanh toán trực tuyến
                                            </h4>

                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "card"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="card" id="card" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="card" className="font-medium text-gray-900 cursor-pointer">
                                                        Thẻ tín dụng/ghi nợ
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Visa, Mastercard, JCB, American Express</p>
                                                </div>
                                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                    <CreditCard className="h-5 w-5 text-blue-600" />
                                                </div>
                                            </div>

                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "momo"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="momo" id="momo" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="momo" className="font-medium text-gray-900 cursor-pointer">
                                                        Ví MoMo
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Thanh toán qua ví điện tử MoMo</p>
                                                </div>
                                                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">M</span>
                                                </div>
                                            </div>

                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "zalopay"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="zalopay" id="zalopay" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="zalopay" className="font-medium text-gray-900 cursor-pointer">
                                                        ZaloPay
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Thanh toán qua ví điện tử ZaloPay</p>
                                                </div>
                                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">Z</span>
                                                </div>
                                            </div>

                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "vnpay"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="vnpay" id="vnpay" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="vnpay" className="font-medium text-gray-900 cursor-pointer">
                                                        VNPay
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Chuyển khoản qua cổng VNPay</p>
                                                </div>
                                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">₫</span>
                                                </div>
                                            </div>

                                            <div
                                                className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === "banking"
                                                        ? "border-green-500 bg-green-50"
                                                        : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                                    }`}
                                            >
                                                <RadioGroupItem value="banking" id="banking" className="text-green-600" />
                                                <div className="flex-1">
                                                    <Label htmlFor="banking" className="font-medium text-gray-900 cursor-pointer">
                                                        Internet Banking
                                                    </Label>
                                                    <p className="text-sm text-gray-600">Chuyển khoản qua ngân hàng trực tuyến</p>
                                                </div>
                                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                                    <span className="text-green-600 text-sm font-bold">B</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Summary */}
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
                                    {/* Cart Items */}
                                    <div className="space-y-4 mb-6">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex items-center space-x-3">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    className="w-12 h-12 object-cover rounded-lg"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                                                    <p className="text-sm text-gray-600">SL: {item.quantity}</p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                                                </p>
                                            </div>
                                        ))}
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

                                    {/* Price Breakdown */}
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

                                    <Button
                                        onClick={handleCheckout}
                                        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3"
                                    >
                                        Đặt hàng ngay
                                    </Button>

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
                </div>
            </div>

            <SuccessNotification isOpen={showSuccess} onClose={() => setShowSuccess(false)} orderDetails={orderDetails} />
        </div>
    )
}
