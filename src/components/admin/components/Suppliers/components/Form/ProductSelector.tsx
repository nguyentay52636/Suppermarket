"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageIcon, ShoppingCart, Star } from "lucide-react"
import type { SupplierProduct } from "./import-goods.types"

interface ProductSelectorProps {
    products: SupplierProduct[]
    selectedProductId: string
    onSelectProductId: (id: string) => void
    onAddProduct: () => void
}

export function ProductSelector({ products, selectedProductId, onSelectProductId, onAddProduct }: ProductSelectorProps) {
    const selectedProduct = products.find((p) => p.maSanPham === selectedProductId)

    return (
        <Card className="bg-gradient-to-r from-purple-100 via-purple-50 to-pink-100 border-purple-300 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-purple-800 text-xl">
                    <div className="p-2 bg-purple-200 rounded-full">
                        <ShoppingCart className="h-6 w-6 text-purple-700" />
                    </div>
                    Chọn sản phẩm nhập hàng
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="flex gap-4 items-end">
                        <div className="flex-1">
                            <Label className="text-purple-700 font-semibold">Sản phẩm có sẵn</Label>
                            <Select value={selectedProductId} onValueChange={onSelectProductId}>
                                <SelectTrigger className="border-purple-300 focus:border-purple-500 h-12">
                                    <SelectValue placeholder="🛒 Chọn sản phẩm để thêm vào phiếu nhập" />
                                </SelectTrigger>
                                <SelectContent className="max-h-80">
                                    {products.map((product) => (
                                        <SelectItem key={product.maSanPham} value={product.maSanPham} className="p-0">
                                            <div className="flex items-center gap-4 py-3 px-2 w-full">
                                                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-sm">
                                                    {product.hinhAnh ? (
                                                        <Image src={product.hinhAnh || "/placeholder.svg"} alt={product.tenSanPham} fill className="object-cover" />
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
                                                        <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-300">
                                                            💰 {product.giaBan.toLocaleString("vi-VN")}đ/{product.donVi}
                                                        </Badge>
                                                        <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                                                            📦 Tồn: {product.soLuongTon}
                                                        </Badge>
                                                        <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-300">
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
                        <Button type="button" onClick={onAddProduct} disabled={!selectedProductId} className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 h-12 shadow-lg">
                            Thêm vào giỏ
                        </Button>
                    </div>

                    {selectedProduct && (
                        <Card className="bg-white border-purple-200 shadow-md">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-6">
                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-lg">
                                        {selectedProduct.hinhAnh ? (
                                            <Image src={selectedProduct.hinhAnh || "/placeholder.svg"} alt={selectedProduct.tenSanPham} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <ImageIcon className="h-12 w-12 text-gray-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h4 className="font-bold text-purple-900 text-lg">{selectedProduct.tenSanPham}</h4>
                                                <p className="text-gray-600 mt-1">{selectedProduct.moTa}</p>
                                            </div>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <Star className="h-4 w-4 fill-current" />
                                                <Star className="h-4 w-4 fill-current" />
                                                <Star className="h-4 w-4 fill-current" />
                                                <Star className="h-4 w-4 fill-current" />
                                                <Star className="h-4 w-4" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                                                <span className="text-green-600 text-sm font-medium">Giá nhập</span>
                                                <p className="font-bold text-green-800 text-lg">{(selectedProduct.giaNhap ?? selectedProduct.giaBan).toLocaleString("vi-VN")}đ</p>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                                <span className="text-blue-600 text-sm font-medium">Đơn vị</span>
                                                <p className="font-bold text-blue-800 text-lg">{selectedProduct.donVi}</p>
                                            </div>
                                            <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                                                <span className="text-orange-600 text-sm font-medium">Tồn kho</span>
                                                <p className="font-bold text-orange-800 text-lg">{selectedProduct.soLuongTon}</p>
                                            </div>
                                            <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                                                <span className="text-purple-600 text-sm font-medium">Xuất xứ</span>
                                                <p className="font-bold text-purple-800 text-lg">{selectedProduct.xuatXu}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}


