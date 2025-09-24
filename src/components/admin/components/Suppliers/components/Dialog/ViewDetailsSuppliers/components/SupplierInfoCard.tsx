import { NhaCungCap } from '@/apis/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Phone, Mail, MapPin } from 'lucide-react'

interface SupplierInfoCardProps {
    supplier: NhaCungCap
}

export function SupplierInfoCard({ supplier }: SupplierInfoCardProps) {
    return (
        <Card className="border shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        Thông tin chi tiết nhà cung cấp
                    </div>
                    <Badge
                        variant={supplier.trangThai === "active" ? "default" : "secondary"}
                        className={
                            supplier.trangThai === "active"
                                ? "bg-green-600 text-white hover:bg-green-700 px-4 py-2"
                                : "bg-red-100 text-red-800 px-4 py-2"
                        }
                    >
                        {supplier.trangThai === "active" ? "Đang hoạt động" : "Tạm ngưng"}
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                                Mã nhà cung cấp
                            </label>
                            <div className="flex items-center gap-2 mt-2">
                                <Badge variant="outline" className="px-3 py-1">
                                    {supplier.maNhaCungCap}
                                </Badge>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide">
                                Tên nhà cung cấp
                            </label>
                            <p className="text-xl font-bold text-gray-900 mt-2">{supplier.tenNhaCungCap}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Ngày tạo</label>
                            <p className="text-lg text-gray-700 mt-2">
                                {new Date(supplier.ngayTao).toLocaleDateString("vi-VN")}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                Số điện thoại
                            </label>
                            <p className="text-lg text-gray-700 mt-2 font-semibold">{supplier.soDienThoai}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Email
                            </label>
                            <p className="text-lg text-gray-700 mt-2 font-semibold break-all">{supplier.email}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                            <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                Địa chỉ
                            </label>
                            <p className="text-lg text-gray-700 mt-2 leading-relaxed">{supplier.diaChi}</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {supplier.moTa && (
                            <div className="bg-gray-50 p-4 rounded-lg border">
                                <label className="text-gray-600 font-semibold text-sm uppercase tracking-wide">Mô tả</label>
                                <p className="text-gray-700 mt-2 leading-relaxed bg-white p-3 rounded-lg border">
                                    {supplier.moTa}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
