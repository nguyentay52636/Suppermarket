import React from 'react'
import { Phone, MapPin } from 'lucide-react'
import Link from 'next/link'    

export default function TopBarHeader() {
    return (
        <div className="bg-primary text-primary-foreground py-2 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Hotline: 0912117494</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Địa chỉ: Hồ Gươm, Vietnam</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="/login" className="hover:text-primary/80">
                            <span>Đăng nhập</span>
                        </Link>
                        <span className="text-primary-foreground/60">/</span>
                        <Link href="/register" className="hover:text-primary/80">
                            <span>Đăng ký</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
