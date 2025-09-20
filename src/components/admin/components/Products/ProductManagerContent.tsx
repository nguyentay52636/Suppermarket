"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ManagerProductHeader from "@/components/admin/components/Products/components/ManagerProductHeader"
import CardsStatProduct from "./components/CardsStatProduct"
import ManagerTableProducts from "./components/ManagerTableProducts"
import { mockProducts, Product } from "./components/data"
import ActionHeaderTitle from "./components/actions/ActionHeaderTitle"
import SearchCategoryProduct from "./components/actions/SearchCategoryProduct"
import { FormProduct } from "./Dialog/FormProduct"
import PaginationManagerProduct from "./PaginationManagerProduct"




export default function ProductManagerContent() {
    const [products, setProducts] = useState<Product[]>(mockProducts)
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedStatus, setSelectedStatus] = useState("all")
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [editingProduct, setEditingProduct] = useState<Product | null>(null)

    const categories = ["all", "Trái cây", "Rau củ", "Thịt", "Hải sản", "Đồ uống", "Gia vị", "Bánh kẹo", "Sữa & trứng"]
    const statuses = ["all", "active", "inactive", "out-of-stock"]

    const totalProducts = products.length
    const activeProducts = products.filter((p) => p.trangThai === "active").length
    const outOfStockProducts = products.filter((p) => p.trangThai === "out-of-stock").length
    const inactiveProducts = products.filter((p) => p.trangThai === "inactive").length

    const filteredProducts = products.filter((product) => {
        const matchesSearch =
            product.tenSanPham.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.maSanPham.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "all" || product.categoryName === selectedCategory
        const matchesStatus = selectedStatus === "all" || product.trangThai === selectedStatus
        return matchesSearch && matchesCategory && matchesStatus
    })



    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price)
    }

    const getStatusBadge = (status: string) => {
        const statusConfig = {
            active: { label: "Đang bán", className: "bg-green-100 text-green-800 border-green-200" },
            inactive: { label: "Tạm ngưng", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
            "out-of-stock": { label: "Hết hàng", className: "bg-red-100 text-red-800 border-red-200" },
        }
        const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.active
        return (
            <Badge className={`${config.className} border`}>
                {config.label}
            </Badge>
        )
    }

    const handleViewDetails = (product: Product) => {
        // TODO: Implement view details functionality
        console.log("View details for product:", product.maSanPham)
    }

    const handleViewEdit = (product: Product) => {
        // TODO: Implement view edit functionality
        console.log("View edit for product:", product.maSanPham)
    }

    const handleDeleteProduct = (maSanPham: string) => {
        if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            setProducts(products.filter((p) => p.maSanPham !== maSanPham))
        }
    }

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product)
        setIsAddDialogOpen(true)
    }

    const handleOpenAddDialog = () => {
        setEditingProduct(null)
        setIsAddDialogOpen(true)
    }

    const handleFormSubmit = (product: Product) => {
        if (editingProduct) {
            // Update existing product
            setProducts(
                products.map((p) =>
                    p.maSanPham === editingProduct.maSanPham
                        ? { ...product, categoryName: "Trái cây", brandName: "Fresh Import", typeName: "Táo" }
                        : p,
                ),
            )
        } else {
            // Add new product
            setProducts([
                ...products,
                {
                    ...product,
                    categoryName: "Trái cây",
                    brandName: "Fresh Import",
                    typeName: "Táo",
                    createdAt: new Date().toISOString().split("T")[0],
                    updatedAt: new Date().toISOString().split("T")[0],
                },
            ])
        }
        setIsAddDialogOpen(false)
        setEditingProduct(null)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 mx-2 my-4">
            {/* Header */}
            <ManagerProductHeader />

            <div className="p-6 space-y-6 my-4">
                <CardsStatProduct totalProducts={totalProducts} activeProducts={activeProducts} outOfStockProducts={outOfStockProducts} inactiveProducts={inactiveProducts} />

                <Card className="bg-white shadow-sm border-0">
                    <CardHeader className="border-b bg-gray-50/50">
                        <ActionHeaderTitle handleOpenAddDialog={handleOpenAddDialog} />
                    </CardHeader>
                    <CardContent className="p-6">
                        <SearchCategoryProduct searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} statuses={statuses} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />

                        <ManagerTableProducts
                            products={filteredProducts}
                            formatPrice={formatPrice}
                            getStatusBadge={getStatusBadge}
                            handleViewDetails={handleViewDetails}
                            handleViewEdit={handleViewEdit}
                            handleEditProduct={handleEditProduct}
                            handleDeleteProduct={handleDeleteProduct}
                        />
                        <PaginationManagerProduct totalItems={filteredProducts.length} />


                    </CardContent>
                </Card>
            </div>

            <FormProduct
                editingProduct={editingProduct}
                isOpen={isAddDialogOpen}
                onOpenChange={setIsAddDialogOpen}
                onSubmit={() => {
                    console.log("Form submitted")
                }

                }
            />
        </div>
    )
}
