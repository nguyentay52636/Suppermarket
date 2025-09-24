"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Package, Percent, User, FileText, Clock } from "lucide-react"
import { KhuyenMai } from "../../ManagerPromotionsContent"
import { SanPham } from "@/apis/types"

interface PromotionFormProps {
    promotion?: KhuyenMai
    onSubmit: (promotion: Omit<KhuyenMai, "maKhuyenMai"> | KhuyenMai) => void
    onCancel: () => void
}

// Mock data for products
const mockProducts: SanPham[] = [
    {
        maSanPham: "SP001",
        tenSanPham: "Cà chua cherry",
        hinhAnh: "/cherry-tomatoes.jpg",
        giaBan: 25000,
        soLuongTon: 100,
        danhMuc: "Rau củ",
        xuatXu: "Đà Lạt",
        trangThai: "active",
    },
    {
        maSanPham: "SP002",
        tenSanPham: "Thịt ba chỉ",
        hinhAnh: "/pork-belly-meat.jpg",
        giaBan: 180000,
        soLuongTon: 50,
        danhMuc: "Thịt tươi",
        xuatXu: "Việt Nam",
        trangThai: "active",
    },
    {
        maSanPham: "SP003",
        tenSanPham: "Sữa tươi TH True Milk",
        hinhAnh: "/milk-carton-th-true-milk.jpg",
        giaBan: 32000,
        soLuongTon: 200,
        danhMuc: "Sữa",
        xuatXu: "Việt Nam",
        trangThai: "active",
    },
]

export function FormPromotions({ promotion, onSubmit, onCancel }: PromotionFormProps) {
    const [formData, setFormData] = useState({
        maSanPham: promotion?.maSanPham || "",
        tenKhachHangKhuyenMai: promotion?.tenKhachHangKhuyenMai || "",
        phanTramGiamGia: promotion?.phanTramGiamGia || 0,
        ngayBatDau: promotion?.ngayBatDau || "",
        ngayKetThuc: promotion?.ngayKetThuc || "",
        moTa: promotion?.moTa || "",
        trangThai: promotion?.trangThai || ("active" as const),
    })

    const selectedProduct = mockProducts.find((p) => p.maSanPham === formData.maSanPham)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (promotion) {
            onSubmit({ ...formData, maKhuyenMai: promotion.maKhuyenMai })
        } else {
            onSubmit(formData)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product Selection */}
                <Card className="border-green-200 bg-green-50/30">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-green-800 flex items-center gap-2">
                            <Package className="h-5 w-5" />
                            Thông tin sản phẩm
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="maSanPham" className="text-green-700">
                                Chọn sản phẩm *
                            </Label>
                            <Select
                                value={formData.maSanPham}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, maSanPham: value }))}
                            >
                                <SelectTrigger className="border-green-300 focus:border-green-500">
                                    <SelectValue placeholder="Chọn sản phẩm khuyến mãi" />
                                </SelectTrigger>
                                <SelectContent>
                                    {mockProducts.map((product) => (
                                        <SelectItem key={product.maSanPham} value={product.maSanPham}>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={product.hinhAnh || "/placeholder.svg"}
                                                    alt={product.tenSanPham}
                                                    className="w-8 h-8 rounded object-cover"
                                                />
                                                <div>
                                                    <div className="font-medium">{product.tenSanPham}</div>
                                                    <div className="text-sm text-gray-500">
                                                        {product.giaBan.toLocaleString("vi-VN")}đ - {product.danhMuc}
                                                    </div>
                                                </div>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {selectedProduct && (
                            <Card className="border-green-100 bg-white">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={selectedProduct.hinhAnh || "/placeholder.svg"}
                                            alt={selectedProduct.tenSanPham}
                                            className="w-16 h-16 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-green-800">{selectedProduct.tenSanPham}</h4>
                                            <p className="text-sm text-gray-600">
                                                {selectedProduct.danhMuc} - {selectedProduct.xuatXu}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                    {selectedProduct.giaBan.toLocaleString("vi-VN")}đ
                                                </Badge>
                                                <Badge variant="outline" className="border-green-300">
                                                    Tồn: {selectedProduct.soLuongTon}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </CardContent>
                </Card>

                {/* Customer and Discount Info */}
                <Card className="border-blue-200 bg-blue-50/30">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-blue-800 flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Thông tin khuyến mãi
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label htmlFor="tenKhachHangKhuyenMai" className="text-blue-700">
                                Tên chương trình *
                            </Label>
                            <Input
                                id="tenKhachHangKhuyenMai"
                                value={formData.tenKhachHangKhuyenMai}
                                onChange={(e) => setFormData((prev) => ({ ...prev, tenKhachHangKhuyenMai: e.target.value }))}
                                placeholder="Nhập tên chương trình khuyến mãi"
                                className="border-blue-300 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="phanTramGiamGia" className="text-blue-700 flex items-center gap-2">
                                <Percent className="h-4 w-4" />
                                Phần trăm giảm giá (%) *
                            </Label>
                            <Input
                                id="phanTramGiamGia"
                                type="number"
                                min="0"
                                max="100"
                                value={formData.phanTramGiamGia}
                                onChange={(e) => setFormData((prev) => ({ ...prev, phanTramGiamGia: Number(e.target.value) }))}
                                placeholder="0"
                                className="border-blue-300 focus:border-blue-500"
                                required
                            />
                            {selectedProduct && formData.phanTramGiamGia > 0 && (
                                <div className="mt-2 p-2 bg-blue-100 rounded-md">
                                    <p className="text-sm text-blue-700">
                                        Giá sau giảm:{" "}
                                        <span className="font-semibold">
                                            {(selectedProduct.giaBan * (1 - formData.phanTramGiamGia / 100)).toLocaleString("vi-VN")}đ
                                        </span>
                                    </p>
                                </div>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="trangThai" className="text-blue-700">
                                Trạng thái
                            </Label>
                            <Select
                                value={formData.trangThai}
                                onValueChange={(value: "active" | "inactive" | "expired") =>
                                    setFormData((prev) => ({ ...prev, trangThai: value }))
                                }
                            >
                                <SelectTrigger className="border-blue-300 focus:border-blue-500">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Đang hoạt động</SelectItem>
                                    <SelectItem value="inactive">Tạm ngưng</SelectItem>
                                    <SelectItem value="expired">Hết hạn</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Date Range */}
            <Card className="border-orange-200 bg-orange-50/30">
                <CardHeader className="pb-3">
                    <CardTitle className="text-orange-800 flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Thời gian áp dụng
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="ngayBatDau" className="text-orange-700 flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                Ngày bắt đầu *
                            </Label>
                            <Input
                                id="ngayBatDau"
                                type="datetime-local"
                                value={formData.ngayBatDau}
                                onChange={(e) => setFormData((prev) => ({ ...prev, ngayBatDau: e.target.value }))}
                                className="border-orange-300 focus:border-orange-500"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="ngayKetThuc" className="text-orange-700 flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                Ngày kết thúc *
                            </Label>
                            <Input
                                id="ngayKetThuc"
                                type="datetime-local"
                                value={formData.ngayKetThuc}
                                onChange={(e) => setFormData((prev) => ({ ...prev, ngayKetThuc: e.target.value }))}
                                className="border-orange-300 focus:border-orange-500"
                                required
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Description */}
            <Card className="border-purple-200 bg-purple-50/30">
                <CardHeader className="pb-3">
                    <CardTitle className="text-purple-800 flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Mô tả chi tiết
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Textarea
                        id="moTa"
                        value={formData.moTa}
                        onChange={(e) => setFormData((prev) => ({ ...prev, moTa: e.target.value }))}
                        placeholder="Nhập mô tả chi tiết về chương trình khuyến mãi..."
                        className="border-purple-300 focus:border-purple-500 min-h-[100px]"
                        rows={4}
                    />
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t">
                <Button
                    type="button"
                    variant="outline"
                    onClick={onCancel}
                    className="border-gray-300 hover:bg-gray-50 bg-transparent"
                >
                    Hủy
                </Button>
                <Button type="submit" className="bg-green-700 hover:bg-green-800 text-white">
                    {promotion ? "Cập nhật" : "Tạo mới"}
                </Button>
            </div>
        </form>
    )
}
