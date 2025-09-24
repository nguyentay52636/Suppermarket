import React from 'react'
import { FormPromotions } from '../FormPromotions/FormPromotions'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { KhuyenMai } from '../../ManagerPromotionsContent'
interface DialogEditPromotionsProps {
    isFormOpen: boolean
    setIsFormOpen: (open: boolean) => void
    selectedPromotion: KhuyenMai | null
    handleSubmit: (promotion: Omit<KhuyenMai, "maKhuyenMai"> | KhuyenMai) => void
    setSelectedPromotion: (promotion: KhuyenMai | null) => void
}
export default function DialogEditPromotions({ isFormOpen, setIsFormOpen, selectedPromotion, handleSubmit, setSelectedPromotion }: DialogEditPromotionsProps) {
    return (
        <>
            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogContent className="max-w-6xl! max-h-[90vh]! overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{selectedPromotion ? "Chỉnh sửa khuyến mãi" : "Thêm khuyến mãi mới"}</DialogTitle>
                    </DialogHeader>
                    <FormPromotions
                        promotion={selectedPromotion || undefined}
                        onSubmit={handleSubmit}
                        onCancel={() => {
                            setIsFormOpen(false)
                            setSelectedPromotion(null)
                        }}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
}


