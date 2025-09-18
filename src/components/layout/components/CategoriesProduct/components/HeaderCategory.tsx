import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeaderCategory() {
    return (
        <div className="bg-white border-b sticky top-0 z-40">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="ghost" size="icon" className=' text-white cursor-pointer bg-green-700 hover:bg-green-800'>
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <h1 className="text-xl font-bold text-">Danh mục sản phẩm</h1>
                </div>
            </div>
        </div>
    )
}
