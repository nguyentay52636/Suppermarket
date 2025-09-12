import SiderBarCategory from '@/components/SiderBarCategory/SiderBarCategory'
import React from 'react'
import Banner from './components/Banner'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-background">
            <div >
                <SiderBarCategory />
                <Banner />
            </div>

        </div>
    )
}
