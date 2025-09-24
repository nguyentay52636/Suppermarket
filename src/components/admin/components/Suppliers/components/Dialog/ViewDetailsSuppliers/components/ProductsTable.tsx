import { SanPham } from '@/apis/types'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Package } from 'lucide-react'

interface ProductsTableProps {
    products: SanPham[]
}

export function ProductsTable({ products }: ProductsTableProps) {
    return (
        <Card className="border shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <Package className="h-6 w-6 text-blue-600" />
                        </div>
                        Danh sách sản phẩm cung cấp
                    </div>
                    <Badge variant="outline" className="px-4 py-2">
                        {products.length} sản phẩm
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-bold">Hình ảnh</TableHead>
                                <TableHead className="font-bold">Mã SP</TableHead>
                                <TableHead className="font-bold">Tên sản phẩm</TableHead>
                                <TableHead className="font-bold">Đơn vị</TableHead>
                                <TableHead className="font-bold">Giá nhập</TableHead>
                                <TableHead className="font-bold">SL tồn</TableHead>
                                <TableHead className="font-bold">Giá trị tồn</TableHead>
                                <TableHead className="font-bold">Trạng thái</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.maSanPham} className="hover:bg-gray-50">
                                    <TableCell>
                                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Package className="h-8 w-8 text-gray-400" />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="font-mono">
                                            {product.maSanPham}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-bold text-gray-900">{product.tenSanPham}</div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary">
                                            {product.donVi}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-bold text-green-600 text-lg">
                                            {(product.giaNhap ?? product.giaBan).toLocaleString("vi-VN")}đ
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-bold text-blue-600 text-lg">{product.soLuongTon}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="font-bold text-purple-600 text-lg">
                                            {(((product.giaNhap ?? product.giaBan)) * product.soLuongTon).toLocaleString("vi-VN")}đ
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
                                            {product.trangThai === "active" ? "Hoạt động" : "Tạm ngưng"}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}
