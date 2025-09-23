"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Building2, MapPin } from "lucide-react"
import type { NhaCungCap } from "@/apis/types"

interface SupplierInfoCardProps {
    supplier: NhaCungCap
}

export function SupplierInfoCard({ supplier }: SupplierInfoCardProps) {
    return (
        <Card className="bg-gradient-to-r from-green-100 via-green-50 to-emerald-100 border-green-300 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-green-800 text-xl">
                    <div className="p-2 bg-green-200 rounded-full">
                        <Building2 className="h-6 w-6 text-green-700" />
                    </div>
                    Thông tin nhà cung cấp
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label className="text-green-700 font-semibold">Mã nhà cung cấp</Label>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300 px-3 py-1">
                                {supplier.maNhaCungCap}
                            </Badge>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-green-700 font-semibold">Tên nhà cung cấp</Label>
                        <p className="font-bold text-green-900 text-lg">{supplier.tenNhaCungCap}</p>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-green-700 font-semibold">Trạng thái</Label>
                        <Badge
                            variant={supplier.trangThai === "active" ? "default" : "secondary"}
                            className={
                                supplier.trangThai === "active"
                                    ? "bg-green-600 text-white hover:bg-green-700"
                                    : "bg-red-100 text-red-800"
                            }
                        >
                            {supplier.trangThai === "active" ? "Đang hoạt động" : "Tạm ngưng"}
                        </Badge>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="space-y-2">
                        <Label className="text-green-700 font-semibold flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            Địa chỉ
                        </Label>
                        <p className="text-green-800">{supplier.diaChi}</p>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-green-700 font-semibold">Liên hệ</Label>
                        <div className="space-y-1">
                            <p className="text-green-800">📞 {supplier.soDienThoai}</p>
                            <p className="text-green-800">✉️ {supplier.email}</p>
                        </div>
                    </div>
                </div>
                {supplier.moTa && (
                    <div className="mt-4 space-y-2">
                        <Label className="text-green-700 font-semibold">Mô tả</Label>
                        <p className="text-green-800 bg-green-50 p-3 rounded-lg border border-green-200">{supplier.moTa}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}


