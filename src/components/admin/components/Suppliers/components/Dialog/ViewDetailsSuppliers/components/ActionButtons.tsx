import { NhaCungCap } from '@/apis/types'
import { Button } from '@/components/ui/button'
import { Edit, ShoppingCart } from 'lucide-react'

interface ActionButtonsProps {
    selectedSupplier: NhaCungCap
    onClose: () => void
    onEdit: () => void
    onImport: () => void
}

export function ActionButtons({ selectedSupplier, onClose, onEdit, onImport }: ActionButtonsProps) {
    return (
        <div className="flex flex-wrap justify-end gap-4 pt-6">
            <Button
                variant="outline"
                onClick={onClose}
                className="px-6 py-3 text-lg"
            >
                Đóng
            </Button>
            <Button
                onClick={onEdit}
                className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-6 py-3 text-lg"
            >
                <Edit className="h-5 w-5 mr-2" />
                Chỉnh sửa
            </Button>
            <Button
                onClick={onImport}
                disabled={selectedSupplier.trangThai === "inactive"}
                className="bg-green-700 cursor-pointer hover:bg-green-800 text-white px-6 py-3 text-lg disabled:opacity-50"
            >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Nhập hàng
            </Button>
        </div>
    )
}
