import React from 'react'
import { Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function TopBarHeader() {
    return (
        <div className="bg-primary text-white hover:text-white py-2 hidden md:block">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <span>Hotline: 0912117494</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4" />
                            <span>Địa chỉ: HCM, Vietnam</span>
                        </div>
                    </div>  
                    <div className="flex items-center space-x-4">
                        <Link href="/auth/login" className="">
                            <span>Đăng nhập</span>
                        </Link>
                        <span className="text-primary-foreground/60">/</span>
                        <Link href="/auth/register" className="">
                            <span>Đăng ký</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
