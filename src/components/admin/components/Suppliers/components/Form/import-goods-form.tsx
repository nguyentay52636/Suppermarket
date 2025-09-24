"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { mockSupplierProducts } from "./mockSupplierProducts"
import {
    Plus,
    Minus,
    Package,
    Calculator,
    Calendar,
    Building2,
    ShoppingCart,
    Trash2,
    ImageIcon,
    Clock,
    MapPin,
} from "lucide-react"
import type { NhaCungCap, ChiTietPhieuNhap } from "@/apis/types"
import Image from "next/image"

interface ImportGoodsFormProps {
    supplier: NhaCungCap
    onSubmit: (data: {
        ngayNhap: string
        chiTietPhieuNhap: ChiTietPhieuNhap[]
        tongTien: number
    }) => void
    onCancel: () => void
}

// Local type for supplier product items used in this form
// removed inline SupplierProduct and mock data (moved to files)

export function ImportGoodsForm({ supplier, onSubmit, onCancel }: ImportGoodsFormProps) {
    const [ngayNhap, setNgayNhap] = useState(new Date().toISOString().split("T")[0])
    const [selectedProducts, setSelectedProducts] = useState<ChiTietPhieuNhap[]>([])
    const [selectedProductId, setSelectedProductId] = useState("")

    const availableProducts = mockSupplierProducts.filter(
        (product) => !selectedProducts.some((selected) => selected.maSanPham === product.maSanPham),
    )

    const addProduct = () => {
        if (!selectedProductId) return

        const product = mockSupplierProducts.find((p) => p.maSanPham === selectedProductId)
        if (!product) return

        const newItem: ChiTietPhieuNhap = {
            maChiTietPhieuNhap: `CT${Date.now()}`,
            maSanPham: product.maSanPham,
            maPhieuNhap: "", // Will be set when creating the import receipt
            soLuong: 1,
            donGia: product.giaNhap ?? product.giaBan,
            thanhTien: product.giaNhap ?? product.giaBan,
        }

        setSelectedProducts([...selectedProducts, newItem])
        setSelectedProductId("")
    }

    const updateQuantity = (index: number, soLuong: number) => {
        if (soLuong < 1) return

        const updated = [...selectedProducts]
        updated[index].soLuong = soLuong
        updated[index].thanhTien = soLuong * updated[index].donGia
        setSelectedProducts(updated)
    }

    const updatePrice = (index: number, donGia: number) => {
        if (donGia < 0) return

        const updated = [...selectedProducts]
        updated[index].donGia = donGia
        updated[index].thanhTien = updated[index].soLuong * donGia
        setSelectedProducts(updated)
    }

    const removeProduct = (index: number) => {
        setSelectedProducts(selectedProducts.filter((_, i) => i !== index))
    }

    const tongTien = selectedProducts.reduce((sum, item) => sum + item.thanhTien, 0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (selectedProducts.length === 0) return

        onSubmit({
            ngayNhap,
            chiTietPhieuNhap: selectedProducts,
            tongTien,
        })
    }

    const getProduct = (maSanPham: string) => {
        return mockSupplierProducts.find((p) => p.maSanPham === maSanPham)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <ScrollArea className="h-screen">
                <form onSubmit={handleSubmit} className="space-y-6 p-6">
                    <Card className="border shadow-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Building2 className="h-6 w-6 text-blue-600" />
                                </div>
                                Thông tin nhà cung cấp
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label className="font-semibold">Mã nhà cung cấp</Label>
                                    <Badge variant="outline" className="px-3 py-1">
                                        {supplier.maNhaCungCap}
                                    </Badge>
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold">Tên nhà cung cấp</Label>
                                    <p className="font-bold text-lg">{supplier.tenNhaCungCap}</p>
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold">Trạng thái</Label>
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
                                    <Label className="font-semibold flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        Địa chỉ
                                    </Label>
                                    <p className="text-gray-700">{supplier.diaChi}</p>
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold">Liên hệ</Label>
                                    <div className="space-y-1">
                                        <p className="text-gray-700">📞 {supplier.soDienThoai}</p>
                                        <p className="text-gray-700">✉️ {supplier.email}</p>
                                    </div>
                                </div>
                            </div>
                            {supplier.moTa && (
                                <div className="mt-4 space-y-2">
                                    <Label className="font-semibold">Mô tả</Label>
                                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg border">{supplier.moTa}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <Calendar className="h-6 w-6 text-blue-600" />
                                </div>
                                Thông tin phiếu nhập
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="ngayNhap" className="font-semibold flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        Ngày nhập *
                                    </Label>
                                    <Input
                                        id="ngayNhap"
                                        type="date"
                                        value={ngayNhap}
                                        onChange={(e) => setNgayNhap(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="font-semibold">Mã phiếu nhập</Label>
                                    <div className="bg-gray-50 p-3 rounded-lg border">
                                        <p className="text-gray-600 font-medium">Sẽ được tạo tự động sau khi lưu</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border shadow-sm">
                        <CardHeader className="pb-4">
                            <CardTitle className="flex items-center gap-3 text-xl">
                                <div className="p-2 bg-blue-100 rounded-lg">
                                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                                </div>
                                Chọn sản phẩm nhập hàng
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-end">
                                    <div className="flex-1">
                                        <Label className="font-semibold">Sản phẩm có sẵn</Label>
                                        <Select value={selectedProductId} onValueChange={setSelectedProductId}>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="🛒 Chọn sản phẩm để thêm vào phiếu nhập" />
                                            </SelectTrigger>
                                            <SelectContent className="max-h-80">
                                                {availableProducts.map((product) => (
                                                    <SelectItem key={product.maSanPham} value={product.maSanPham} className="p-0">
                                                        <div className="flex items-center gap-4 py-3 px-2 w-full">
                                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                                {product.hinhAnh ? (
                                                                    <Image
                                                                        src={product.hinhAnh || "/placeholder.svg"}
                                                                        alt={product.tenSanPham}
                                                                        fill
                                                                        className="object-cover"
                                                                    />
                                                                ) : (
                                                                    <div className="w-full h-full flex items-center justify-center">
                                                                        <ImageIcon className="h-8 w-8 text-gray-400" />
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="font-bold text-gray-900 truncate">{product.tenSanPham}</div>
                                                                <div className="text-sm text-gray-600 line-clamp-2 mt-1">{product.moTa}</div>
                                                                <div className="flex items-center gap-2 mt-2 flex-wrap">
                                                                    <Badge variant="outline" className="text-xs">
                                                                        💰 {product.giaBan.toLocaleString("vi-VN")}đ/{product.donVi}
                                                                    </Badge>
                                                                    <Badge variant="secondary" className="text-xs">
                                                                        📦 Tồn: {product.soLuongTon}
                                                                    </Badge>
                                                                    <Badge variant="outline" className="text-xs">
                                                                        📍 {product.xuatXu}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button
                                        type="button"
                                        onClick={addProduct}
                                        disabled={!selectedProductId}
                                        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 h-12"
                                    >
                                        <Plus className="h-5 w-5 mr-2" />
                                        Thêm vào giỏ
                                    </Button>
                                </div>

                                {selectedProductId && (
                                    <Card className="bg-white border shadow-sm">
                                        <CardContent className="p-6">
                                            {(() => {
                                                const product = mockSupplierProducts.find((p) => p.maSanPham === selectedProductId)
                                                if (!product) return null

                                                return (
                                                    <div className="flex items-start gap-6">
                                                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                                            {product.hinhAnh ? (
                                                                <Image
                                                                    src={product.hinhAnh || "/placeholder.svg"}
                                                                    alt={product.tenSanPham}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center">
                                                                    <ImageIcon className="h-12 w-12 text-gray-400" />
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div>
                                                                    <h4 className="font-bold text-lg">{product.tenSanPham}</h4>
                                                                    <p className="text-gray-600 mt-1">{product.moTa}</p>
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                                <div className="bg-gray-50 p-3 rounded-lg border">
                                                                    <span className="text-gray-600 text-sm font-medium">Giá nhập</span>
                                                                    <p className="font-bold text-lg">
                                                                        {(product.giaNhap ?? product.giaBan).toLocaleString("vi-VN")}đ
                                                                    </p>
                                                                </div>
                                                                <div className="bg-gray-50 p-3 rounded-lg border">
                                                                    <span className="text-gray-600 text-sm font-medium">Đơn vị</span>
                                                                    <p className="font-bold text-lg">{product.donVi}</p>
                                                                </div>
                                                                <div className="bg-gray-50 p-3 rounded-lg border">
                                                                    <span className="text-gray-600 text-sm font-medium">Tồn kho</span>
                                                                    <p className="font-bold text-lg">{product.soLuongTon}</p>
                                                                </div>
                                                                <div className="bg-gray-50 p-3 rounded-lg border">
                                                                    <span className="text-gray-600 text-sm font-medium">Xuất xứ</span>
                                                                    <p className="font-bold text-lg">{product.xuatXu}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })()}
                                        </CardContent>
                                    </Card>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {selectedProducts.length > 0 && (
                        <Card className="border shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center justify-between text-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                            <Package className="h-6 w-6 text-blue-600" />
                                        </div>
                                        Chi tiết sản phẩm nhập
                                    </div>
                                    <Badge variant="outline" className="px-3 py-1 text-lg">
                                        {selectedProducts.length} sản phẩm
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[400px] w-full rounded-md border">
                                    <div className="p-4">
                                        <Table>
                                            <TableHeader className="sticky top-0 bg-gray-50 z-10">
                                                <TableRow>
                                                    <TableHead className="font-bold">Hình ảnh</TableHead>
                                                    <TableHead className="font-bold">Thông tin sản phẩm</TableHead>
                                                    <TableHead className="font-bold">Số lượng</TableHead>
                                                    <TableHead className="font-bold">Đơn giá</TableHead>
                                                    <TableHead className="font-bold">Thành tiền</TableHead>
                                                    <TableHead className="font-bold">Thao tác</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {selectedProducts.map((item, index) => {
                                                    const product = getProduct(item.maSanPham)
                                                    return (
                                                        <TableRow key={item.maChiTietPhieuNhap} className="hover:bg-gray-50">
                                                            <TableCell>
                                                                <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                                                                    {product?.hinhAnh ? (
                                                                        <Image
                                                                            src={product.hinhAnh || "/placeholder.svg"}
                                                                            alt={product.tenSanPham}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    ) : (
                                                                        <div className="w-full h-full flex items-center justify-center">
                                                                            <ImageIcon className="h-10 w-10 text-gray-400" />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <div className="space-y-2">
                                                                    <div className="font-bold text-gray-900">{product?.tenSanPham}</div>
                                                                    <div className="text-sm text-gray-600 line-clamp-2">{product?.moTa}</div>
                                                                    <div className="flex items-center gap-2 flex-wrap">
                                                                        <Badge variant="outline" className="text-xs">
                                                                            {item.maSanPham}
                                                                        </Badge>
                                                                        <Badge variant="secondary" className="text-xs">
                                                                            {product?.donVi}
                                                                        </Badge>
                                                                        <Badge variant="outline" className="text-xs">
                                                                            {product?.xuatXu}
                                                                        </Badge>
                                                                    </div>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <div className="flex items-center gap-2">
                                                                    <Button
                                                                        type="button"
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => updateQuantity(index, item.soLuong - 1)}
                                                                        disabled={item.soLuong <= 1}
                                                                        className="h-8 w-8 p-0"
                                                                    >
                                                                        <Minus className="h-4 w-4" />
                                                                    </Button>
                                                                    <Input
                                                                        type="number"
                                                                        value={item.soLuong}
                                                                        onChange={(e) => updateQuantity(index, Number.parseInt(e.target.value) || 1)}
                                                                        className="w-16 text-center font-bold"
                                                                        min="1"
                                                                    />
                                                                    <Button
                                                                        type="button"
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => updateQuantity(index, item.soLuong + 1)}
                                                                        className="h-8 w-8 p-0"
                                                                    >
                                                                        <Plus className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Input
                                                                    type="number"
                                                                    value={item.donGia}
                                                                    onChange={(e) => updatePrice(index, Number.parseInt(e.target.value) || 0)}
                                                                    className="w-32 font-bold"
                                                                    min="0"
                                                                    step="1000"
                                                                />
                                                            </TableCell>
                                                            <TableCell className="font-bold text-green-600 text-lg">
                                                                {item.thanhTien.toLocaleString("vi-VN")}đ
                                                            </TableCell>
                                                            <TableCell>
                                                                <Button
                                                                    type="button"
                                                                    variant="outline"
                                                                    size="sm"
                                                                    onClick={() => removeProduct(index)}
                                                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                })}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </ScrollArea>

                                <Separator className="my-6" />

                                <div className="sticky bottom-0 bg-white pt-4">
                                    <div className="flex justify-end">
                                        <Card className="bg-green-50 border-green-200 shadow-sm">
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-3 bg-green-100 rounded-lg">
                                                        <Calculator className="h-6 w-6 text-green-600" />
                                                    </div>
                                                    <div>
                                                        <span className="text-green-800 font-bold text-lg">Tổng tiền phiếu nhập:</span>
                                                        <div className="text-3xl font-bold text-green-900 mt-1">
                                                            {tongTien.toLocaleString("vi-VN")}đ
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <div className="sticky bottom-0 bg-white pt-6 pb-4 border-t border-gray-200">
                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onCancel}
                                className="px-8 py-3 text-lg"
                            >
                                Hủy bỏ
                            </Button>
                            <Button
                                type="submit"
                                disabled={selectedProducts.length === 0}
                                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg"
                            >
                                <Package className="h-5 w-5 mr-2" />
                                Tạo phiếu nhập ({selectedProducts.length} sản phẩm)
                            </Button>
                        </div>
                    </div>
                </form>
            </ScrollArea>
        </div>
    )
}
