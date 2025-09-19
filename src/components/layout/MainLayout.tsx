import React from 'react'
import CardsCategory from './components/CardsCategory/CardsCategory'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import Product from './components/Product/Product'
import { SectionStats } from './components/SectionStats/SectionStats'
import { NewsletterSection } from './components/NewsletterSection/NewsletterSection'

export default function MainLayout() {
    return (
        <>
            <div className="min-h-screen">
                <div className="container mx-auto px-4 py-6">
                    <HeroBanner />
                </div>
                <CardsCategory />
                <Product />
                <SectionStats />
                <NewsletterSection />
            </div>
        </>


    )
}
