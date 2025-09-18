import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Grid, List, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SlidersHorizontal } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
interface SearchFilterCategoryProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    sortBy: string
    setSortBy: (sort: string) => void
    priceRange: number[]
    setPriceRange: (range: number[]) => void
    selectedBrands: string[]
    setSelectedBrands: (brands: string[]) => void
    showDiscountOnly: boolean
    setShowDiscountOnly: (show: boolean) => void
    categories: any[]
    brands: any[]
    minRating: number
    setMinRating: (rating: number) => void
    viewMode: string
    setViewMode: (mode: string) => void
    selectedCategory: string
    setSelectedCategory: (category: string) => void
}
export default function SearchFilterCategory({ searchQuery, setSearchQuery, sortBy, setSortBy, priceRange, setPriceRange, selectedBrands, setSelectedBrands, showDiscountOnly, setShowDiscountOnly, categories, brands, minRating, setMinRating, viewMode, setViewMode, selectedCategory, setSelectedCategory }: SearchFilterCategoryProps) {
    return (
        <>
            <Card className="mb-6">
                <CardContent className="p-4">
                    {/* Basic Search */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-40">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="popular">Phổ biến</SelectItem>
                                    <SelectItem value="newest">Mới nhất</SelectItem>
                                    <SelectItem value="price-low">Giá thấp</SelectItem>
                                    <SelectItem value="price-high">Giá cao</SelectItem>
                                    <SelectItem value="rating">Đánh giá</SelectItem>
                                </SelectContent>
                            </Select>

                            {/* Advanced Search Sheet */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <SlidersHorizontal className="h-4 w-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Tìm kiếm nâng cao</SheetTitle>
                                    </SheetHeader>
                                    <div className="py-6 space-y-6">
                                        {/* Price Range */}
                                        <div>
                                            <Label className="text-sm font-medium">Khoảng giá</Label>
                                            <div className="mt-2">
                                                <Slider
                                                    value={priceRange}
                                                    onValueChange={setPriceRange}
                                                    max={1000000}
                                                    step={10000}
                                                    className="w-full"
                                                />
                                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                                    <span>{formatPrice(priceRange[0])}</span>
                                                    <span>{formatPrice(priceRange[1])}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Brands */}
                                        <div>
                                            <Label className="text-sm font-medium">Thương hiệu</Label>
                                            <div className="mt-2 space-y-2">
                                                {brands.map((brand) => (
                                                    <div key={brand} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={brand}
                                                            checked={selectedBrands.includes(brand)}
                                                            onCheckedChange={(checked) => {
                                                                if (checked) {
                                                                    setSelectedBrands([...selectedBrands, brand])
                                                                } else {
                                                                    setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                                                                }
                                                            }}
                                                        />
                                                        <Label htmlFor={brand} className="text-sm">
                                                            {brand}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Rating */}
                                        <div>
                                            <Label className="text-sm font-medium">Đánh giá tối thiểu</Label>
                                            <div className="mt-2">
                                                <Slider
                                                    value={[minRating]}
                                                    onValueChange={(value) => setMinRating(value[0])}
                                                    max={5}
                                                    step={0.5}
                                                    className="w-full"
                                                />
                                                <div className="text-sm text-gray-500 mt-1">{minRating} sao trở lên</div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Discount Only */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="discount" checked={showDiscountOnly} onCheckedChange={setShowDiscountOnly} />
                                            <Label htmlFor="discount" className="text-sm">
                                                Chỉ sản phẩm giảm giá
                                            </Label>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <div className="flex border rounded-md">
                                <Button
                                    variant={viewMode === "grid" ? "default" : "ghost"}
                                    size="icon"
                                    onClick={() => setViewMode("grid")}
                                    className="rounded-r-none"
                                >
                                    <Grid className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "list" ? "default" : "ghost"}
                                    size="icon"
                                    onClick={() => setViewMode("list")}
                                    className="rounded-l-none"
                                >
                                    <List className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(selectedCategory !== "all" || selectedBrands.length > 0 || showDiscountOnly || minRating > 0) && (
                        <div className="flex flex-wrap gap-2">
                            {selectedCategory !== "all" && (
                                <Badge variant="secondary" className="bg-green-100 text-green-700">
                                    {categories.find((c) => c.id === selectedCategory)?.name}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-auto p-0 ml-1"
                                        onClick={() => setSelectedCategory("all")}
                                    >
                                        ×
                                    </Button>
                                </Badge>
                            )}
                            {selectedBrands.map((brand) => (
                                <Badge key={brand} variant="secondary" className="bg-blue-100 text-blue-700">
                                    {brand}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-auto p-0 ml-1"
                                        onClick={() => setSelectedBrands(selectedBrands.filter((b) => b !== brand))}
                                    >
                                        ×
                                    </Button>
                                </Badge>
                            ))}
                            {showDiscountOnly && (
                                <Badge variant="secondary" className="bg-red-100 text-red-700">
                                    Giảm giá
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-auto p-0 ml-1"
                                        onClick={() => setShowDiscountOnly(false)}
                                    >
                                        ×
                                    </Button>
                                </Badge>
                            )}
                            {minRating > 0 && (
                                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                                    {minRating}+ sao
                                    <Button variant="ghost" size="sm" className="h-auto p-0 ml-1" onClick={() => setMinRating(0)}>
                                        ×
                                    </Button>
                                </Badge>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    )
}
