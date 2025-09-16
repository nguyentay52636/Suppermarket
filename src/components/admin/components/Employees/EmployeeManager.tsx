import React from 'react'
import { PaginationProvider } from '@/context/PaginationContext'
import ManagerEmployeeContent from './EmployeeManagerContent'
export default function ManagerEmployee() {
    return (
        <PaginationProvider>
            <ManagerEmployeeContent />
        </PaginationProvider>
    )
}   