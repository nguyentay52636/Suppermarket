import { SanPham } from '@/apis/types'
import { Card, CardContent } from '@/components/ui/card'

interface StatsCardsProps {
    products: SanPham[]
}

export function StatsCards({ products }: StatsCardsProps) {
    const activeProducts = products.filter((p) => p.trangThai === "active").length
    const totalQuantity = products.reduce((sum, p) => sum + p.soLuongTon, 0)
    const totalValue = products.reduce((sum, p) => sum + ((p.giaNhap ?? p.giaBan) * p.soLuongTon), 0)

    return (
        <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-green-800">
                            {activeProducts}
                        </div>
                        <div className="text-green-600 font-medium">Sản phẩm hoạt động</div>
                    </CardContent>
                </Card>
                <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-blue-800">
                            {totalQuantity}
                        </div>
                        <div className="text-blue-600 font-medium">Tổng số lượng tồn</div>
                    </CardContent>
                </Card>
                <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4 text-center">
                        <div className="text-2xl font-bold text-purple-800">
                            {totalValue.toLocaleString("vi-VN")}đ
                        </div>
                        <div className="text-purple-600 font-medium">Tổng giá trị tồn kho</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
