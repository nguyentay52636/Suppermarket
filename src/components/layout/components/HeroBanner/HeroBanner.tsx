"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Truck, Shield, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            image: "/public/bg-a.jpg",
            title: "Siêu thị hiện đại",
            description: "Không gian mua sắm thoải mái",
        },
        {
            image: "/public/bg-b.jpg",
            title: "Rau củ tươi ngon",
            description: "Được chọn lọc kỹ càng",
        },
        {
            image: "/public/bg-c.jpg",
            title: "Trái cây organic",
            description: "Chất lượng cao cấp",
        },
    ]

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50/50 py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                                <Star className="w-4 h-4 mr-1" />
                                Cửa hàng uy tín #1
                            </Badge>
                            <h1 className="text-5xl lg:text-6xl font-bold text-balance leading-tight">
                                Bách Hóa{" "}
                                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Xanh</span>
                            </h1>
                            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                                Mang đến cho bạn những sản phẩm tươi ngon, chất lượng cao với dịch vụ giao hàng nhanh chóng và tiện lợi
                                nhất.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Mua sắm ngay
                            </Button>
                            <Button variant="outline" size="lg" className="border-green-200 hover:bg-green-50 bg-transparent">
                                Khám phá sản phẩm
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Truck className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="font-semibold text-sm">Giao hàng nhanh</p>
                                <p className="text-xs text-muted-foreground">Trong 30 phút</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="font-semibold text-sm">Chất lượng đảm bảo</p>
                                <p className="text-xs text-muted-foreground">100% tươi ngon</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Star className="w-6 h-6 text-green-600" />
                                </div>
                                <p className="font-semibold text-sm">Giá tốt nhất</p>
                                <p className="text-xs text-muted-foreground">Tiết kiệm 20%</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} className="w-full flex-shrink-0 relative">
                                        <img
                                            src={slide.image || "/placeholder.svg"}
                                            alt={slide.title}
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20 flex items-end">
                                            <div className="p-6 text-white">
                                                <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                                                <p className="text-sm opacity-90">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-lg"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Slide indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentSlide ? "bg-white" : "bg-white/50"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-green-200/20 rounded-2xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
