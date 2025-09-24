import { NhaCungCap, SanPham } from '@/apis/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { Building2 } from 'lucide-react'
import { SupplierInfoCard } from './components/SupplierInfoCard'
import { ProductsTable } from './components/ProductsTable'
import { StatsCards } from './components/StatsCards'
import { ActionButtons } from './components/ActionButtons'


export interface ViewDetailsSuppliersProps {
    mockProducts: SanPham[]
    isDetailDialogOpen: boolean
    setIsDetailDialogOpen: (open: boolean) => void
    selectedSupplier: NhaCungCap | null
    setSelectedSupplier: (supplier: NhaCungCap | null) => void
    handleEditSupplier: (supplier: NhaCungCap) => void
    setIsEditDialogOpen: (open: boolean) => void
    setIsImportDialogOpen: (open: boolean) => void
}
export default function ViewDetailsSuppliers({
    mockProducts,
    isDetailDialogOpen,
    setIsDetailDialogOpen,
    selectedSupplier,
    setSelectedSupplier,
    handleEditSupplier,
    setIsEditDialogOpen,
    setIsImportDialogOpen
}: ViewDetailsSuppliersProps) {
    const handleEdit = () => {
        setIsDetailDialogOpen(false)
        setIsEditDialogOpen(true)
    }

    const handleImport = () => {
        setIsDetailDialogOpen(false)
        setIsImportDialogOpen(true)
    }

    const handleClose = () => {
        setIsDetailDialogOpen(false)
    }

    return (
        <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
            <DialogContent className="max-w-7xl! max-h-[80vh]! overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        Chi tiết nhà cung cấp
                    </DialogTitle>
                </DialogHeader>
                {selectedSupplier && (
                    <div className="space-y-6">
                        <SupplierInfoCard supplier={selectedSupplier} />
                        <ProductsTable products={mockProducts} />
                        <StatsCards products={mockProducts} />
                        <ActionButtons
                            selectedSupplier={selectedSupplier}
                            onClose={handleClose}
                            onEdit={handleEdit}
                            onImport={handleImport}
                        />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
