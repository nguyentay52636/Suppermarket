import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Eye, Edit, Trash2, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { NhaCungCap } from '@/apis/types'

interface ManagerTableSuppliersProps {
    suppliers: NhaCungCap[]
    filteredSuppliers: NhaCungCap[]
    setSelectedSupplier: (supplier: NhaCungCap) => void
    setIsImportDialogOpen: (open: boolean) => void
    setIsDetailDialogOpen: (open: boolean) => void
    setIsEditDialogOpen: (open: boolean) => void
    handleDeleteSupplier: (maNhaCungCap: string) => void
}
export default function ManagerTableSuppliers({ suppliers, filteredSuppliers, setSelectedSupplier, setIsImportDialogOpen, setIsDetailDialogOpen, setIsEditDialogOpen, handleDeleteSupplier }: ManagerTableSuppliersProps) {
    return (
        <>
            <Card className="bg-white shadow-sm">
                <CardHeader>
                    <CardTitle>Danh sách nhà cung cấp</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100">
                                    <TableHead className="font-semibold text-gray-900">Mã NCC</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Tên nhà cung cấp</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Liên hệ</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Địa chỉ</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Trạng thái</TableHead>
                                    <TableHead className="font-semibold text-gray-900">Ngày tạo</TableHead>
                                    <TableHead className="text-right font-semibold text-gray-900">Thao tác</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredSuppliers.map((supplier) => (
                                    <TableRow key={supplier.maNhaCungCap} className="hover:bg-gray-50">
                                        <TableCell className="font-medium">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                                                {supplier.maNhaCungCap}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="font-medium text-gray-900">{supplier.tenNhaCungCap}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                                    <Phone className="h-3 w-3" />
                                                    {supplier.soDienThoai}
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-gray-600">
                                                    <Mail className="h-3 w-3" />
                                                    {supplier.email}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1 text-sm text-gray-600">
                                                <MapPin className="h-3 w-3" />
                                                <span className="truncate max-w-[200px]">{supplier.diaChi}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={supplier.trangThai === "active" ? "default" : "secondary"}
                                                className={
                                                    supplier.trangThai === "active"
                                                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                        : "bg-red-100 text-red-800 hover:bg-red-200"
                                                }
                                            >
                                                {supplier.trangThai === "active" ? "Hoạt động" : "Tạm ngưng"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-gray-600">{supplier.ngayTao}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedSupplier(supplier)
                                                        setIsImportDialogOpen(true)
                                                    }}
                                                    className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                                                    disabled={supplier.trangThai === "inactive"}
                                                >
                                                    <ShoppingCart className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedSupplier(supplier)
                                                        setIsDetailDialogOpen(true)
                                                    }}
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => {
                                                        setSelectedSupplier(supplier)
                                                        setIsEditDialogOpen(true)
                                                    }}
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleDeleteSupplier(supplier.maNhaCungCap)}
                                                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
