import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import UserActions from './UserActions'
import HeaderMobile from './HeaderMoblie/HeaderMobile'


interface SearchAndFilterProps {
    navigationItems: {
        href: string
        label: string
        icon: React.ComponentType<{ className?: string }>
        active: boolean
    }[]
}
export default function SearchAndFilter({ navigationItems }: SearchAndFilterProps) {
    return (
        <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden md:flex relative">
                <Input placeholder="Tìm kiếm..." className="w-48 lg:w-64 pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-1 md:space-x-2">
                <UserActions />
            </div>
            <HeaderMobile navigationItems={navigationItems} />
        </div>
    )
}
