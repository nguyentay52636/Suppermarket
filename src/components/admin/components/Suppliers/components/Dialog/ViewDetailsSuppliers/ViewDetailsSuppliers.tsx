import { NhaCungCap, SanPham } from '@/apis/types'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, Phone, Mail, MapPin, Package } from 'lucide-react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Edit, ShoppingCart } from 'lucide-react'


export interface ViewDetailsSuppliersProps {
    mockProducts: SanPham[]
    isDetailDialogOpen: boolean
    setIsDetailDialogOpen: (open: boolean) => void
    selectedSupplier: NhaCungCap | null
    setSelectedSupplier: (supplier: NhaCungCap | null) => void
    handleEditSupplier: (supplier: NhaCungCap) => void
    setIsEditDialogOpen: (open: boolean) => void
    setIsImportDialogOpen: (open: boolean) => void
}
export default function ViewDetailsSuppliers({ mockProducts, isDetailDialogOpen, setIsDetailDialogOpen, selectedSupplier, setSelectedSupplier, handleEditSupplier, setIsEditDialogOpen, setIsImportDialogOpen }: ViewDetailsSuppliersProps) {
    return (
        <>
            <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
                <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl">
                            <div className="p-2 bg-green-100 rounded-full">
                                <Building2 className="h-6 w-6 text-green-700" />
                            </div>
                            Chi tiết nhà cung cấp
                        </DialogTitle>
                    </DialogHeader>
                    {selectedSupplier && (
                        <div className="space-y-8">
                            <Card className="bg-gradient-to-r from-green-50 via-emerald-50 to-blue-50 border-green-200 shadow-lg">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center justify-between text-green-800 text-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 bg-green-200 rounded-full">
                                                <Building2 className="h-6 w-6 text-green-700" />
                                            </div>
                                            Thông tin chi tiết nhà cung cấp
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant={selectedSupplier.trangThai === "active" ? "default" : "secondary"}
                                                className={
                                                    selectedSupplier.trangThai === "active"
                                                        ? "bg-green-600 text-white hover:bg-green-700 px-4 py-2 text-lg"
                                                        : "bg-red-100 text-red-800 px-4 py-2 text-lg"
                                                }
                                            >
                                                {selectedSupplier.trangThai === "active" ? "🟢 Đang hoạt động" : "🔴 Tạm ngưng"}
                                            </Badge>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="space-y-6">
                                            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                                                <label className="text-green-700 font-bold text-sm uppercase tracking-wide">
                                                    Mã nhà cung cấp
                                                </label>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-green-50 text-green-800 border-green-300 px-3 py-1 text-lg font-bold"
                                                    >
                                                        {selectedSupplier.maNhaCungCap}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                                                <label className="text-green-700 font-bold text-sm uppercase tracking-wide">
                                                    Tên nhà cung cấp
                                                </label>
                                                <p className="text-xl font-bold text-green-900 mt-2">{selectedSupplier.tenNhaCungCap}</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
                                                <label className="text-green-700 font-bold text-sm uppercase tracking-wide">Ngày tạo</label>
                                                <p className="text-lg text-green-800 mt-2 flex items-center gap-2">
                                                    📅 {new Date(selectedSupplier.ngayTao).toLocaleDateString("vi-VN")}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                                                <label className="text-blue-700 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    Số điện thoại
                                                </label>
                                                <p className="text-lg text-blue-800 mt-2 font-semibold">{selectedSupplier.soDienThoai}</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                                                <label className="text-blue-700 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    Email
                                                </label>
                                                <p className="text-lg text-blue-800 mt-2 font-semibold break-all">{selectedSupplier.email}</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                                                <label className="text-blue-700 font-bold text-sm uppercase tracking-wide flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    Địa chỉ
                                                </label>
                                                <p className="text-lg text-blue-800 mt-2 leading-relaxed">{selectedSupplier.diaChi}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            {selectedSupplier.moTa && (
                                                <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm">
                                                    <label className="text-purple-700 font-bold text-sm uppercase tracking-wide">Mô tả</label>
                                                    <p className="text-purple-800 mt-2 leading-relaxed bg-purple-50 p-3 rounded-lg border border-purple-200">
                                                        {selectedSupplier.moTa}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="bg-white p-4 rounded-lg border border-orange-200 shadow-sm">
                                                <label className="text-orange-700 font-bold text-sm uppercase tracking-wide">Thống kê</label>
                                                <div className="mt-3 space-y-3">
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-orange-600">Tổng sản phẩm:</span>
                                                        <Badge variant="outline" className="bg-orange-50 text-orange-800 border-orange-300">
                                                            {mockProducts.length} sản phẩm
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-orange-600">Sản phẩm hoạt động:</span>
                                                        <Badge variant="outline" className="bg-green-50 text-green-800 border-green-300">
                                                            {mockProducts.filter((p) => p.trangThai === "active").length} sản phẩm
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-orange-600">Tổng giá trị tồn kho:</span>
                                                        <Badge variant="outline" className="bg-blue-50 text-blue-800 border-blue-300">
                                                            {mockProducts
                                                                .reduce((sum, p) => sum + p.giaNhap * p.soLuongTon, 0)
                                                                .toLocaleString("vi-VN")}
                                                            đ
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-to-r from-orange-50 via-yellow-50 to-orange-100 border-orange-200 shadow-lg">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center justify-between text-orange-800 text-xl">
                                        <div className="flex items-center gap-3">
                                            <div className="p-3 bg-orange-200 rounded-full">
                                                <Package className="h-6 w-6 text-orange-700" />
                                            </div>
                                            Danh sách sản phẩm cung cấp
                                        </div>
                                        <Badge
                                            variant="outline"
                                            className="bg-orange-50 text-orange-800 border-orange-300 px-4 py-2 text-lg"
                                        >
                                            {mockProducts.length} sản phẩm
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="bg-gradient-to-r from-orange-200 to-yellow-200">
                                                    <TableHead className="text-orange-900 font-bold">Hình ảnh</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Mã SP</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Tên sản phẩm</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Đơn vị</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Giá nhập</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">SL tồn</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Giá trị tồn</TableHead>
                                                    <TableHead className="text-orange-900 font-bold">Trạng thái</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {mockProducts.map((product) => (
                                                    <TableRow key={product.maSanPham} className="hover:bg-orange-50">
                                                        <TableCell>
                                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shadow-md">
                                                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
                                                                    <Package className="h-8 w-8 text-orange-600" />
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge variant="outline" className="bg-gray-50 text-gray-800 font-mono">
                                                                {product.maSanPham}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="font-bold text-gray-900">{product.tenSanPham}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge variant="secondary" className="bg-blue-50 text-blue-800">
                                                                {product.donVi}
                                                            </Badge>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="font-bold text-green-700 text-lg">
                                                                {product.giaNhap.toLocaleString("vi-VN")}đ
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="font-bold text-blue-700 text-lg">{product.soLuongTon}</div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="font-bold text-purple-700 text-lg">
                                                                {(product.giaNhap * product.soLuongTon).toLocaleString("vi-VN")}đ
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Badge
                                                                variant={product.trangThai === "active" ? "default" : "secondary"}
                                                                className={
                                                                    product.trangThai === "active"
                                                                        ? "bg-green-600 text-white hover:bg-green-700"
                                                                        : "bg-red-100 text-red-800"
                                                                }
                                                            >
                                                                {product.trangThai === "active" ? "🟢 Hoạt động" : "🔴 Tạm ngưng"}
                                                            </Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-orange-200">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <Card className="bg-green-100 border-green-300">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-green-800">
                                                        {mockProducts.filter((p) => p.trangThai === "active").length}
                                                    </div>
                                                    <div className="text-green-600 font-medium">Sản phẩm hoạt động</div>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-blue-100 border-blue-300">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-blue-800">
                                                        {mockProducts.reduce((sum, p) => sum + p.soLuongTon, 0)}
                                                    </div>
                                                    <div className="text-blue-600 font-medium">Tổng số lượng tồn</div>
                                                </CardContent>
                                            </Card>
                                            <Card className="bg-purple-100 border-purple-300">
                                                <CardContent className="p-4 text-center">
                                                    <div className="text-2xl font-bold text-purple-800">
                                                        {mockProducts
                                                            .reduce((sum, p) => sum + p.giaNhap * p.soLuongTon, 0)
                                                            .toLocaleString("vi-VN")}
                                                        đ
                                                    </div>
                                                    <div className="text-purple-600 font-medium">Tổng giá trị tồn kho</div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex justify-end gap-4 pt-6">
                                <Button
                                    variant="outline"
                                    onClick={() => setIsDetailDialogOpen(false)}
                                    className="px-6 py-3 text-lg border-gray-300 hover:bg-gray-50"
                                >
                                    ❌ Đóng
                                </Button>
                                <Button
                                    onClick={() => {
                                        setIsDetailDialogOpen(false)
                                        setIsEditDialogOpen(true)
                                    }}
                                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-lg shadow-lg"
                                >
                                    <Edit className="h-5 w-5 mr-2" />
                                    ✏️ Chỉnh sửa
                                </Button>
                                <Button
                                    onClick={() => {
                                        setIsDetailDialogOpen(false)
                                        setIsImportDialogOpen(true)
                                    }}
                                    disabled={selectedSupplier.trangThai === "inactive"}
                                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-lg shadow-lg disabled:opacity-50"
                                >
                                    <ShoppingCart className="h-5 w-5 mr-2" />🛒 Nhập hàng
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
