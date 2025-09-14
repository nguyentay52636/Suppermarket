"use client"

import { useState } from "react"
import {
    Search,
    Phone,
    Home,
    Package,
    Newspaper,
    Info,
    MessageCircle,
    LeafyGreen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import TopBarHeader from "./TopBarHeader"
import SearchAndFilter from "./SearchAndFilter"

export default function Header() {

    const navigationItems = [
        { href: "/", label: "Trang chủ", icon: Home, active: true },
        { href: "/products", label: "Sản phẩm", icon: Package, active: false },
        { href: "/news", label: "Tin tức", icon: Newspaper, active: false },
        { href: "#", label: "Giới thiệu", icon: Info, active: false },
        { href: "#", label: "Liên hệ", icon: MessageCircle, active: false },
    ]

    return (
        <>
            <header className="sticky  top-0 z-50 bg-white shadow-md">
                <TopBarHeader />
                {/* Main Header */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center justify-between">
                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm md:text-lg">
                                        <LeafyGreen className="h-8 w-8 text-white!" />
                                    </span>
                                </div>
                                <div className="hidden sm:block">
                                    <h1 className="text-xl md:text-2xl font-bold text-primary">BÁCH HÓA XANH</h1>
                                    <p className="text-xs md:text-sm text-muted-foreground">Thực phẩm sạch cho mọi nhà</p>
                                </div>
                            </Link>

                            {/* Navigation Menu - Hidden on mobile */}
                            <nav className="hidden lg:flex items-center space-x-8 rounded-md">

                                {navigationItems.map((item) => (
                                    <Link key={item.href} href={item.href}>
                                        <Button
                                            variant="ghost"
                                            className={
                                                item.active
                                                    ? "text-white bg-orange-500 hover:bg-orange-600 rounded-xl cursor-pointer px-6 py-2"
                                                    : "text-black hover:text-white rounded-xl cursor-pointer px-6 py-2 hover:text-white hover:bg-orange-500 "
                                            }
                                        >
                                            {item.label}
                                        </Button>
                                    </Link>
                                ))}
                            </nav>

                            {/* Search and Actions */}
                            <SearchAndFilter navigationItems={navigationItems} />
                        </div>

                        {/* Mobile Search - Only show when menu is closed */}
                        <div className="md:hidden mt-4 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Tìm kiếm sản phẩm..." className="pl-10" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg md:hidden">
                <div className="grid grid-cols-5 py-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href} className="flex flex-col items-center py-2 px-1">
                                <Icon className={`h-5 w-5 ${item.active ? "text-primary" : "text-muted-foreground"}`} />
                                <span className={`text-xs mt-1 ${item.active ? "text-primary font-medium" : "text-muted-foreground"}`}>
                                    {item.label}
                                </span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="fixed right-4 bottom-20 z-40 flex flex-col space-y-2 md:hidden">
                <a
                    href="tel:0912117494"
                    className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                >
                    <Phone className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-6 w-6 text-white" />
                </a>
            </div>
        </>
    )
}
