"use client"
import { Button } from "@/components/ui/button"
import { Plus, Star, Heart, Eye, Search } from "lucide-react"
import { useState, useMemo } from "react"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface Product {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    rating: number
    inStock: boolean
    discount?: number
    brand?: string
}

interface ProductGridProps {
    selectedCategory: string
    searchQuery: string
    onAddToCart: (product: Product) => void
    searchFilters?: any
}

const products: Product[] = [
    {
        id: "1",
        name: "Táo Fuji nhập khẩu",
        price: 45000,
        originalPrice: 55000,
        image: "/fresh-red-apples.png",
        category: "imported-fruits",
        rating: 4.8,
        inStock: true,
        discount: 18,
        brand: "Vinamilk",
    },
    {
        id: "2",
        name: "Nước cam Tropicana 1L",
        price: 32000,
        image: "/orange-juice-bottle.jpg",
        category: "beverages",
        rating: 4.5,
        inStock: true,
        brand: "Tropicana",
    },
    {
        id: "3",
        name: "Sữa tươi TH True Milk 1L",
        price: 28000,
        image: "assets/images/milk.jpg",
        category: "dairy",
        rating: 4.7,
        inStock: true,
        brand: "TH True Milk",
    },
    {
        id: "4",
        name: "Bánh quy Oreo 137g",
        price: 18000,
        originalPrice: 22000,
        image: "/oreo-cookies-package.jpg",
        category: "other-foods",
        rating: 4.6,
        inStock: true,
        discount: 18,
        brand: "Oreo",
    },
    {
        id: "5",
        name: "Nước suối Lavie 500ml",
        price: 5000,
        image: "/reusable-water-bottle.png",
        category: "beverages",
        rating: 4.3,
        inStock: true,
        brand: "Lavie",
    },
    {
        id: "6",
        name: "Kẹo Mentos 37.5g",
        price: 12000,
        image: "/mentos-candy-roll.jpg",
        category: "other-foods",
        rating: 4.4,
        inStock: true,
        brand: "Mentos",
    },
    {
        id: "7",
        name: "Chuối Cau Việt Nam",
        price: 25000,
        image: "/fresh-bananas.jpg",
        category: "fruits",
        rating: 4.5,
        inStock: true,
    },
    {
        id: "8",
        name: "Coca Cola 330ml",
        price: 15000,
        image: "/refreshing-cola-can.png",
        category: "beverages",
        rating: 4.2,
        inStock: false,
        brand: "Coca Cola",
    },
    {
        id: "9",
        name: "Rau cải xanh hữu cơ",
        price: 15000,
        image: "/fresh-green-vegetables.jpg",
        category: "vegetables",
        rating: 4.6,
        inStock: true,
    },
    {
        id: "10",
        name: "Thịt bò Úc cao cấp",
        price: 350000,
        originalPrice: 400000,
        image: "/premium-beef-meat.jpg",
        category: "meat",
        rating: 4.9,
        inStock: true,
        discount: 12,
    },
    {
        id: "11",
        name: "Cá hồi Na Uy tươi",
        price: 280000,
        image: "/fresh-salmon-fish.jpg",
        category: "seafood",
        rating: 4.8,
        inStock: true,
    },
    {
        id: "12",
        name: "Sữa chua Vinamilk",
        price: 45000,
        image: "/yogurt-container.jpg",
        category: "dairy",
        rating: 4.4,
        inStock: true,
        brand: "Vinamilk",
    },
    {
        id: "13",
        name: "Rau muống Đà Lạt",
        price: 12000,
        image: "/fresh-green-vegetables.jpg",
        category: "dalat-vegetables",
        rating: 4.7,
        inStock: true,
    },
    {
        id: "14",
        name: "Cá ngừ Nhật Bản",
        price: 450000,
        originalPrice: 500000,
        image: "/fresh-salmon-fish.jpg",
        category: "japanese-fish",
        rating: 4.9,
        inStock: true,
        discount: 10,
    },
    {
        id: "15",
        name: "Thịt heo sạch VietGAP",
        price: 180000,
        image: "/premium-beef-meat.jpg",
        category: "meat",
        rating: 4.6,
        inStock: true,
    },
    {
        id: "16",
        name: "Tôm sú tươi",
        price: 320000,
        image: "/fresh-salmon-fish.jpg",
        category: "seafood",
        rating: 4.8,
        inStock: true,
    },
    {
        id: "17",
        name: "Nho đỏ Úc nhập khẩu",
        price: 85000,
        originalPrice: 95000,
        image: "/fresh-red-apples.png",
        category: "imported-fruits",
        rating: 4.7,
        inStock: true,
        discount: 11,
    },
    {
        id: "18",
        name: "Phô mai Pháp nhập khẩu",
        price: 120000,
        image: "/yogurt-container.jpg",
        category: "imported",
        rating: 4.8,
        inStock: true,
    },
    {
        id: "19",
        name: "Xà lách Đà Lạt",
        price: 18000,
        image: "/fresh-green-vegetables.jpg",
        category: "dalat-vegetables",
        rating: 4.5,
        inStock: true,
    },
    {
        id: "20",
        name: "Cam sành Việt Nam",
        price: 35000,
        image: "/fresh-red-apples.png",
        category: "fruits",
        rating: 4.4,
        inStock: true,
    },
]

const ITEMS_PER_PAGE = 8

export function ListProduct({ selectedCategory, searchQuery, onAddToCart, searchFilters }: ProductGridProps) {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())

            if (!searchFilters) return matchesCategory && matchesSearch

            // Advanced search filters
            const matchesAdvancedSearch = product.name.toLowerCase().includes(searchFilters.query.toLowerCase())
            const matchesPrice = product.price >= searchFilters.priceRange[0] && product.price <= searchFilters.priceRange[1]
            const matchesCategories =
                searchFilters.categories.length === 0 || searchFilters.categories.includes(product.category)
            const matchesBrands =
                searchFilters.brands.length === 0 || (product.brand && searchFilters.brands.includes(product.brand))
            const matchesRating = product.rating >= searchFilters.rating
            const matchesStock = !searchFilters.inStock || product.inStock
            const matchesSale = !searchFilters.onSale || product.discount

            return (
                matchesCategory &&
                matchesSearch &&
                matchesAdvancedSearch &&
                matchesPrice &&
                matchesCategories &&
                matchesBrands &&
                matchesRating &&
                matchesStock &&
                matchesSale
            )
        })
    }, [selectedCategory, searchQuery, searchFilters])

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    const currentProducts = filteredProducts.slice(startIndex, endIndex)

    // Reset to first page when filters change
    useMemo(() => {
        setCurrentPage(1)
    }, [selectedCategory, searchQuery, searchFilters])

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price)
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-balance">
                    {selectedCategory === "all" ? "Sản phẩm nổi bật" : "Sản phẩm"}
                </h2>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                        {filteredProducts.length} sản phẩm
                    </span>
                    {totalPages > 1 && (
                        <span className="text-sm text-muted-foreground">
                            Trang {currentPage} / {totalPages}
                        </span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            backgroundColor: "#ffffff !important",
                            border: "1px solid #e5e7eb",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <div style={{ padding: "0" }}>
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image || "/placeholder.svg?height=200&width=200&query=grocery product"}
                                    alt={product.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Overlay badges and actions */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute top-3 right-3 flex flex-col space-y-2">
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                                            <Heart className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="secondary" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Discount badge */}
                                {product.discount && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "12px",
                                            left: "12px",
                                            backgroundColor: "#ef4444 !important",
                                            color: "#ffffff !important",
                                            padding: "2px 8px",
                                            borderRadius: "4px",
                                            fontSize: "12px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        -{product.discount}%
                                    </div>
                                )}

                                {/* Out of stock overlay */}
                                {!product.inStock && (
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                        <div
                                            style={{
                                                backgroundColor: "#ffffff !important",
                                                color: "#1f2937 !important",
                                                padding: "4px 12px",
                                                borderRadius: "4px",
                                                fontSize: "12px",
                                                fontWeight: "500",
                                            }}
                                        >
                                            Hết hàng
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                <h3
                                    style={{
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        lineHeight: "1.4",
                                        color: "#1f2937 !important",
                                        minHeight: "2.5rem",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {product.name}
                                </h3>

                                <div className="flex items-center space-x-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-3 w-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">({product.rating})</span>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-center space-x-2">
                                        <span style={{ fontWeight: "700", color: "#16a34a !important", fontSize: "18px" }}>
                                            {formatPrice(product.price)}
                                        </span>
                                        {product.originalPrice && (
                                            <span style={{ fontSize: "14px", color: "#6b7280 !important", textDecoration: "line-through" }}>
                                                {formatPrice(product.originalPrice)}
                                            </span>
                                        )}
                                    </div>
                                    {product.discount && (
                                        <p style={{ fontSize: "12px", color: "#16a34a !important", fontWeight: "500" }}>
                                            Tiết kiệm {formatPrice(product.originalPrice! - product.price)}
                                        </p>
                                    )}
                                </div>

                                <div
                                    role="button"
                                    tabIndex={0}
                                    style={{
                                        backgroundColor: "#16a34a !important",
                                        color: "#ffffff !important",
                                        border: "none !important",
                                        borderRadius: "6px",
                                        padding: "8px 12px",
                                        fontSize: "14px",
                                        fontWeight: "500",
                                        cursor: product.inStock ? "pointer" : "not-allowed",
                                        opacity: product.inStock ? 1 : 0.5,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "4px",
                                        width: "100%",
                                        transition: "background-color 0.2s ease",
                                    }}
                                    onClick={() => product.inStock && onAddToCart(product)}
                                    onKeyDown={(e) => {
                                        if ((e.key === "Enter" || e.key === " ") && product.inStock) {
                                            onAddToCart(product)
                                        }
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!product.inStock) return
                                        e.currentTarget.style.backgroundColor = "#15803d !important"
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!product.inStock) return
                                        e.currentTarget.style.backgroundColor = "#16a34a !important"
                                    }}
                                >
                                    <Plus style={{ width: "16px", height: "16px", color: "#ffffff !important" }} />
                                    <span style={{ color: "#ffffff !important" }}>
                                        {hoveredProduct === product.id ? "Thêm ngay" : "Thêm vào giỏ"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>

                            {[...Array(totalPages)].map((_, index) => {
                                const page = index + 1
                                if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                onClick={() => setCurrentPage(page)}
                                                isActive={currentPage === page}
                                                className="cursor-pointer"
                                            >
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                } else if (page === currentPage - 2 || page === currentPage + 2) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    )
                                }
                                return null
                            })}

                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}

            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Không tìm thấy sản phẩm</h3>
                    <p className="text-muted-foreground">Thử tìm kiếm với từ khóa khác hoặc xem tất cả sản phẩm</p>
                </div>
            )}
        </div>
    )
}
