import React from 'react'
import PaginationManagerProduct from './PaginationManagerProduct'
import ProductManagerContent from './ProductManagerContent'
import { products } from '@/components/layout/components/CategoriesProduct/data'
import { PaginationProvider } from '@/context/PaginationContext'

export default function ProductManager() {
    return (
        <>
            <PaginationProvider >
                <ProductManagerContent />
            </PaginationProvider>
        </>
    )
}
