import Link from 'next/link'
import React from 'react'
import SliderFooter from './SliderFooter'

const contactInfo = [
    "Công ty cổ phần công nghệ sạch cho mọi nhà",
    "Địa chỉ: 123 Đường ABC, Quận 1, TP.HCM",
    "Điện thoại: 028 3456 7890",
    "Email: info@bachhoaxanh.com",
    "Website: www.bachhoaxanh.com",
    "Facebook: fb.com/bachhoaxanh"
]

const categoryLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/products", label: "Sản phẩm" },
    { href: "/news", label: "Tin tức" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/contact", label: "Liên hệ" },
    { href: "/cart", label: "Đơn hàng" }
]

const supportLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/products", label: "Sản phẩm" },
    { href: "/orders", label: "Đơn hàng" },
    { href: "/support", label: "Hỗ trợ" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Liên hệ" }
]

const footerBottomLinks = [
    { href: "/privacy", label: "CHÍNH SÁCH" },
    { href: "/terms", label: "ĐIỀU KHOẢN" },
    { href: "/news", label: "TIN TỨC" },
    { href: "/support", label: "HỖ TRỢ" },
    { href: "/contact", label: "LIÊN HỆ" }
]

export default function Footer() {

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold mb-4">LIÊN HỆ</h3>
                            <div className="space-y-3 text-sm">
                                {contactInfo.map((info, index) => (
                                    <p key={index}>{info}</p>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold mb-4">DANH MỤC</h3>
                            <div className="space-y-3 text-sm">
                                {categoryLinks.map((link, index) => (
                                    <div key={index}>
                                        <Link href={link.href} className="hover:text-primary-foreground/80 transition-colors">
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold mb-4">HỖ TRỢ KHÁCH HÀNG</h3>
                            <div className="space-y-3 text-sm">
                                {supportLinks.map((link, index) => (
                                    <div key={index}>
                                        <Link href={link.href} className="hover:text-primary-foreground/80 transition-colors">
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-bold mb-4">KẾT NỐI VỚI BACH HOA XANH</h3>
                            <div className="space-y-4">
                                <div className="bg-white/10 rounded-lg p-4">
                                    <img
                                        src="/placeholder.svg?height=80&width=80&text=QR"
                                        alt="Bach Hoa Xanh Mobile App"
                                        className="w-full h-24 object-cover rounded mb-2"
                                    />
                                    <p className="text-xs text-center">Tải ứng dụng Bach Hoa Xanh</p>
                                </div>
                                <div className="flex justify-center">
                                    <img src="/placeholder.svg?height=80&width=80&text=QR" alt="QR Code" className="w-16 h-16" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-primary-foreground/20 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <div className="text-sm">
                            <p>
                                Copyright 2024 © <span className="font-semibold">Bach Hoa Xanh</span> - Bản quyền thuộc về Bach Hoa
                                Xanh
                            </p>
                        </div>
                        <div className="flex space-x-4 text-sm">
                            {footerBottomLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="hover:text-primary-foreground/80 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}
