"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Mock data
const mockProducts = [
  {
    id: 1,
    name: "Rau cải xanh",
    category: "Rau sạch",
    price: 25000,
    stock: 150,
    status: "active",
    image: "/fresh-green-vegetables.jpg",
    unit: "kg",
    inStock: true,
  },
  {
    id: 2,
    name: "Thịt heo ba chỉ",
    category: "Thịt tươi",
    price: 180000,
    stock: 45,
    status: "active",
    image: "/fresh-pork-belly.jpg",
    unit: "kg",
    inStock: true,
  },
  {
    id: 3,
    name: "Cá hồi Na Uy",
    category: "Hải sản tươi",
    price: 350000,
    stock: 20,
    status: "active",
    image: "/fresh-salmon-fish.jpg",
    unit: "kg",
    inStock: true,
  },
  {
    id: 4,
    name: "Táo Fuji",
    category: "Hoa quả tươi",
    price: 65000,
    stock: 0,
    status: "out_of_stock",
    image: "/fresh-fuji-apples.jpg",
    unit: "kg",
    inStock: true,
  },
  {
    id: 5,
    name: "Sữa tươi Vinamilk",
    category: "Thực phẩm khác",
    price: 28000,
    stock: 200,
    status: "active",
    image: "assets/images/milk.jpg",
    unit: "kg",
  },
]

export default function ProductManager() {
  const [products, setProducts] = useState(mockProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Quản lý sản phẩm</h1>
          <p className="text-gray-600 dark:text-gray-300">Quản lý danh sách sản phẩm trong cửa hàng</p>
        </div>
        <Button
          className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Thêm sản phẩm
        </Button>
      </div>

      <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-gray-900 dark:text-white">
              Danh sách sản phẩm ({filteredProducts.length})
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
              <Input
                placeholder="Tìm kiếm sản phẩm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sản phẩm</TableHead>
                <TableHead>Danh mục</TableHead>
                <TableHead>Giá</TableHead>
                <TableHead>Tồn kho</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">ID: {product.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">{product.category}</TableCell>
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    ₫{product.price.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <span
                      className={
                        product.stock === 0 ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-white"
                      }
                    >
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={product.status === "active" ? "default" : "destructive"}
                      className={product.status === "active" ? "bg-green-600" : "bg-red-600"}
                    >
                      {product.status === "active" ? "Còn hàng" : "Hết hàng"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}