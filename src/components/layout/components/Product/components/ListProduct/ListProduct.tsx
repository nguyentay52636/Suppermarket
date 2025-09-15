"use client"
import { Search } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
import ProductItem from "./components/ProductItem"
import { usePagination } from "@/context/PaginationContext"
import { PaginationProducts } from "./components/PaginationProducts"


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

export function ListProduct({ selectedCategory, searchQuery, searchFilters }: ProductGridProps) {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
    const { paginationState, setCurrentPage, setTotalItems } = usePagination()
    const { currentPage, totalPages, rowsPerPage } = paginationState

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

    const startIndex = (currentPage - 1) * rowsPerPage
    const endIndex = startIndex + rowsPerPage
    const currentProducts = filteredProducts.slice(startIndex, endIndex)

    // Update total items when filtered products change
    useEffect(() => {
        setTotalItems(filteredProducts.length)
    }, [filteredProducts.length, setTotalItems])

    // Reset to first page when filters change
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedCategory, searchQuery, searchFilters, setCurrentPage])


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
                    <ProductItem
                        key={product.id}
                        product={product}
                        hoveredProduct={hoveredProduct}
                        onMouseEnter={setHoveredProduct}
                        onMouseLeave={() => setHoveredProduct(null)}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <PaginationProducts currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
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
