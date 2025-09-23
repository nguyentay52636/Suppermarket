"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calculator, ImageIcon, Minus, Package, Plus, Trash2 } from "lucide-react"
import type { ChiTietPhieuNhap } from "@/apis/types"
import type { SupplierProduct } from "./import-goods.types"

interface SelectedProductsTableProps {
    items: ChiTietPhieuNhap[]
    getProduct: (maSanPham: string) => SupplierProduct | undefined
    onUpdateQuantity: (index: number, soLuong: number) => void
    onUpdatePrice: (index: number, donGia: number) => void
    onRemove: (index: number) => void
}

export function SelectedProductsTable({ items, getProduct, onUpdateQuantity, onUpdatePrice, onRemove }: SelectedProductsTableProps) {
    const tongTien = items.reduce((sum, item) => sum + item.thanhTien, 0)

    if (items.length === 0) return null

    return (
        <Card className="bg-gradient-to-r from-orange-100 via-orange-50 to-yellow-100 border-orange-300 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-orange-800 text-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-200 rounded-full">
                            <Package className="h-6 w-6 text-orange-700" />
                        </div>
                        Chi tiết sản phẩm nhập
                    </div>
                    <Badge variant="outline" className="bg-orange-50 text-orange-800 border-orange-300 px-3 py-1 text-lg">
                        {items.length} sản phẩm
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[400px] w-full rounded-md border border-orange-200">
                    <div className="p-4">
                        <Table>
                            <TableHeader className="sticky top-0 bg-gradient-to-r from-orange-200 to-yellow-200 z-10">
                                <TableRow>
                                    <TableHead className="text-orange-900 font-bold">Hình ảnh</TableHead>
                                    <TableHead className="text-orange-900 font-bold">Thông tin sản phẩm</TableHead>
                                    <TableHead className="text-orange-900 font-bold">Số lượng</TableHead>
                                    <TableHead className="text-orange-900 font-bold">Đơn giá</TableHead>
                                    <TableHead className="text-orange-900 font-bold">Thành tiền</TableHead>
                                    <TableHead className="text-orange-900 font-bold">Thao tác</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.map((item, index) => {
                                    const product = getProduct(item.maSanPham)
                                    return (
                                        <TableRow key={item.maChiTietPhieuNhap} className="hover:bg-orange-50">
                                            <TableCell>
                                                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shadow-md">
                                                    {product?.hinhAnh ? (
                                                        <Image src={product.hinhAnh || "/placeholder.svg"} alt={product.tenSanPham} fill className="object-cover" />
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
                                                        <Badge variant="outline" className="text-xs bg-gray-50">{item.maSanPham}</Badge>
                                                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">{product?.donVi}</Badge>
                                                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700">{product?.xuatXu}</Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button type="button" variant="outline" size="sm" onClick={() => onUpdateQuantity(index, item.soLuong - 1)} disabled={item.soLuong <= 1} className="h-8 w-8 p-0 border-orange-300 hover:bg-orange-100">
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <Input type="number" value={item.soLuong} onChange={(e) => onUpdateQuantity(index, Number.parseInt(e.target.value) || 1)} className="w-16 text-center font-bold border-orange-300 focus:border-orange-500" min="1" />
                                                    <Button type="button" variant="outline" size="sm" onClick={() => onUpdateQuantity(index, item.soLuong + 1)} className="h-8 w-8 p-0 border-orange-300 hover:bg-orange-100">
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Input type="number" value={item.donGia} onChange={(e) => onUpdatePrice(index, Number.parseInt(e.target.value) || 0)} className="w-32 font-bold border-orange-300 focus:border-orange-500" min="0" step="1000" />
                                            </TableCell>
                                            <TableCell className="font-bold text-green-700 text-lg">{item.thanhTien.toLocaleString("vi-VN")}đ</TableCell>
                                            <TableCell>
                                                <Button type="button" variant="outline" size="sm" onClick={() => onRemove(index)} className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300">
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
                        <Card className="bg-gradient-to-r from-green-200 via-green-100 to-emerald-200 border-green-400 shadow-lg">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-green-300 rounded-full">
                                        <Calculator className="h-6 w-6 text-green-800" />
                                    </div>
                                    <div>
                                        <span className="text-green-800 font-bold text-lg">Tổng tiền phiếu nhập:</span>
                                        <div className="text-3xl font-bold text-green-900 mt-1">{tongTien.toLocaleString("vi-VN")}đ</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


