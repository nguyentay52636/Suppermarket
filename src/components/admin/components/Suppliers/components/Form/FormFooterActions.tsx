"use client"

import { Button } from "@/components/ui/button"
import { Package } from "lucide-react"

interface FormFooterActionsProps {
    canSubmit: boolean
    onCancel: () => void
}

export function FormFooterActions({ canSubmit, onCancel }: FormFooterActionsProps) {
    return (
        <div className="sticky bottom-0 bg-white pt-6 pb-4 border-t border-gray-200">
            <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={onCancel} className="px-8 py-3 text-lg border-gray-300 hover:bg-gray-50 bg-transparent">
                    ❌ Hủy bỏ
                </Button>
                <Button type="submit" disabled={!canSubmit} className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg shadow-lg">
                    <Package className="h-5 w-5 mr-2" />✅ Tạo phiếu nhập
                </Button>
            </div>
        </div>
    )
}


