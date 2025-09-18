"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import HeaderCategory from "./components/HeaderCategory"
import SiderCategory from "./components/SiderCategory"
import EmptyProduct from "./components/EmptyProduct"
import SearchFilterCategory from "./components/SearchFilterCategory"
import { products, categories } from "./data"
import ProductItem from "./components/ProductsByCategory/ProductItem"





export default function CategoriesProduct() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [sortBy, setSortBy] = useState("popular")
    const [priceRange, setPriceRange] = useState([0, 1000000])
    const [selectedBrands, setSelectedBrands] = useState<string[]>([])
    const [showDiscountOnly, setShowDiscountOnly] = useState(false)
    const [minRating, setMinRating] = useState(0)

    const brands = ["Organic Valley", "Đà Lạt Farm", "Nhật Bản", "Úc", "Na Uy", "Mỹ", "U Minh"]

    const filteredProducts = useMemo(() => {
        const filtered = products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
            const matchesBrand = selectedBrands.length === 0 || selectedBrands.some((brand) => product.name.includes(brand))
            const matchesDiscount = !showDiscountOnly || product.discount > 0
            const matchesRating = product.rating >= minRating

            return matchesSearch && matchesCategory && matchesPrice && matchesBrand && matchesDiscount && matchesRating
        })

        // Sort products
        switch (sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                filtered.sort((a, b) => b.price - a.price)
                break
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating)
                break
            case "newest":
                filtered.sort((a, b) => b.id - a.id)
                break
            default: // popular
                filtered.sort((a, b) => b.sold - a.sold)
        }

        return filtered
    }, [searchQuery, selectedCategory, sortBy, priceRange, selectedBrands, showDiscountOnly, minRating])

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <HeaderCategory />
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    <SiderCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} products={products} categories={categories} />
                    <div className="flex-1">
                        <SearchFilterCategory brands={brands} minRating={minRating} setMinRating={setMinRating} viewMode={viewMode} setViewMode={(mode) => setViewMode(mode as "grid" | "list")} searchQuery={searchQuery} setSearchQuery={setSearchQuery} sortBy={sortBy} setSortBy={setSortBy} priceRange={priceRange} setPriceRange={setPriceRange} selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} showDiscountOnly={showDiscountOnly} setShowDiscountOnly={setShowDiscountOnly} categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                        <div className="mb-4">
                            <p className="text-gray-600">
                                Hiển thị {filteredProducts.length} sản phẩm
                                {selectedCategory !== "all" &&
                                    ` trong danh mục "${categories.find((c) => c.id === selectedCategory)?.name}"`}
                            </p>
                        </div>

                        {/* Products Grid/List */}
                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {filteredProducts.map((product) => (
                                    <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                                        <CardContent className="p-4">
                                            <div className="relative mb-3">
                                                <img
                                                    src={product.image || "/placeholder.svg"}
                                                    alt={product.name}
                                                    className="w-full h-48 object-cover rounded-lg"
                                                />
                                                {product.discount > 0 && (
                                                    <Badge className="absolute top-2 left-2 bg-red-500">-{product.discount}%</Badge>
                                                )}
                                            </div>
                                            <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                                            <div className="flex items-center gap-1 mb-2">
                                                <span className="text-yellow-400">★</span>
                                                <span className="text-sm text-gray-600">{product.rating}</span>
                                                <span className="text-xs text-gray-400">({product.sold} đã bán)</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="font-bold text-green-600">{formatPrice(product.price)}</span>
                                                {product.originalPrice > product.price && (
                                                    <span className="text-sm text-gray-400 line-through">
                                                        {formatPrice(product.originalPrice)}
                                                    </span>
                                                )}
                                            </div>
                                            <Button className="w-full bg-green-500 hover:bg-green-600">Thêm vào giỏ</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredProducts.map((product) => (
                                    <ProductItem key={product.id} product={product} id={product.id} name={product.name} price={product.price} unit={product.unit} image={product.image} />
                                ))}
                            </div>
                        )}

                        {filteredProducts.length === 0 && (
                            <EmptyProduct />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
