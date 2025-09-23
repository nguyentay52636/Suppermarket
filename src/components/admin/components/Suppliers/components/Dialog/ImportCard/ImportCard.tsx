import { Dialog, DialogTitle, DialogHeader, DialogContent } from '@/components/ui/dialog'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { ImportGoodsForm } from '@/components/admin/components/Suppliers/components/Form/import-goods-form'
import { NhaCungCap } from '@/apis/types'
export interface ImportCardProps {
    isImportDialogOpen: boolean
    setIsImportDialogOpen: (open: boolean) => void
    selectedSupplier: NhaCungCap | null
    setSelectedSupplier: (supplier: NhaCungCap | null) => void
    handleImportGoods: (data: {
        ngayNhap: string
        chiTietPhieuNhap: any[]
        tongTien: number
    }) => void
}
export default function ImportCard({ isImportDialogOpen, setIsImportDialogOpen, selectedSupplier, setSelectedSupplier, handleImportGoods }: ImportCardProps) {
    return (
        <>
            <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
                <DialogContent className="max-w-7xl! max-h-[85vh]! overflow-y-auto ">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <ShoppingCart className="h-5 w-5" />
                            Nhập hàng từ nhà cung cấp
                        </DialogTitle>
                    </DialogHeader>
                    {selectedSupplier && (
                        <ImportGoodsForm
                            supplier={selectedSupplier}
                            onSubmit={handleImportGoods}
                            onCancel={() => {
                                setIsImportDialogOpen(false)
                                setSelectedSupplier(null)
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
