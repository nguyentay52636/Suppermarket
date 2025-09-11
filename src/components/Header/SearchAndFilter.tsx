import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { User, Icon } from 'lucide-react'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
interface SearchAndFilterProps {
    navigationItems: {
        href: string
        label: string
        icon: React.ComponentType<{ className?: string }>
        active: boolean
    }[]
}
export default function SearchAndFilter({ navigationItems }: SearchAndFilterProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex relative">
                <Input placeholder="Tìm kiếm..." className="w-48 lg:w-64 pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-1 md:space-x-2">

                <Link href="/cart">
                    <Button variant="ghost" className="text-white hover:text-white hover:bg-orange-600 relative cursor-pointer bg-orange-500 rounded-xl px-6! py-6!">
                        <ShoppingCart className="h-10 w-10" />

                    </Button>
                </Link>

            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                    <SheetHeader>
                        <SheetTitle className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">BHX</span>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-primary">BÁCH HÓA XANH</h2>
                                <p className="text-xs text-muted-foreground">Thực phẩm sạch cho mọi nhà</p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>

                    <div className="mt-6 space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Tìm kiếm sản phẩm..." className="pl-10" />
                        </div>

                        {/* Mobile Navigation */}
                        <nav className="space-y-2">
                            {navigationItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                                        <Button
                                            variant="ghost"
                                            className={`w-full justify-start space-x-3 ${item.active ? "bg-primary/10 text-primary" : "text-foreground hover:text-primary"
                                                }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <span>{item.label}</span>
                                        </Button>
                                    </Link>
                                )
                            })}
                        </nav>

                        <div className="pt-4 border-t space-y-2">
                            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="ghost" className="w-full justify-start space-x-3">
                                    <User className="h-5 w-5" />
                                    <span>Đăng nhập</span>
                                </Button>
                            </Link>
                            <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button variant="ghost" className="w-full justify-start space-x-3">
                                    <span>Đăng ký</span>
                                </Button>
                            </Link>
                            <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    {/* Giỏ hàng ({state.itemCount}) */}
                                </Button>
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>Hotline: 0912117494</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Địa chỉ: Hồ Gươm, Vietnam</span>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
