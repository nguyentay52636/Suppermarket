import React from 'react'
import EmployeeManagerContent from './EmployeeManagerContent'
import { PaginationProvider } from '@/context/PaginationContext'

export default function ManagerEmployee() {
    return (
        <PaginationProvider>
            <EmployeeManagerContent />
        </PaginationProvider>
    )
}