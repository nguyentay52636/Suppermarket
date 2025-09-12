import SiderBarCategory from '@/components/SiderBarCategory/SiderBarCategory'
import React from 'react'
import HeroBanner from './components/HeroBanner/HeroBanner'
import { CardContent } from '../ui/card'
import CardsCategory from './components/CardsCategory/CardsCategory'

export default function MainLayout() {
    return (
        <div className="min-h-screen ">
            <div className="">
                <div className="flex gap-6 w-full  h-full">
                    <SiderBarCategory />
                    <HeroBanner />
                </div>
                <CardsCategory />
            </div>
            {/* <Banner /> */}
        </div>


    )
}
