import { Search } from 'lucide-react'
import React from 'react'

export default function EmptyProduct() {
    return (
        <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Không tìm thấy sản phẩm</h3>
            <p className="text-gray-500">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
        </div>
    )
}
