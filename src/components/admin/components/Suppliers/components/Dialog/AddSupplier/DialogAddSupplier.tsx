import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import { Plus } from 'lucide-react'
import { DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { SupplierForm } from '@/components/admin/components/Suppliers/components/Form/Supplier'
import { NhaCungCap } from '@/apis/types'

export interface DialogAddSupplierProps {
    isAddDialogOpen: boolean
    setIsAddDialogOpen: (open: boolean) => void
    handleAddSupplier: (supplier: NhaCungCap) => void
}
export default function DialogAddSupplier({ isAddDialogOpen, setIsAddDialogOpen, handleAddSupplier }: DialogEditSupplierProps) {
    return (
        <>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                    <Button className="bg-green-700 hover:bg-green-800">
                        <Plus className="h-4 w-4 mr-2" />
                        Thêm nhà cung cấp
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Thêm nhà cung cấp mới</DialogTitle>
                    </DialogHeader>
                    <SupplierForm onSubmit={handleAddSupplier} onCancel={() => setIsAddDialogOpen(false)} />
                </DialogContent>
            </Dialog>
        </>
    )
}
