import { Card, CardContent } from '@/components/ui/card'
import { Grid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import React from 'react'
interface SiderCategoryProps {
    selectedCategory: string
    setSelectedCategory: (category: string) => void
    products: any[]
    categories: any[]
}
export default function SiderCategory({ selectedCategory, setSelectedCategory, products, categories }: SiderCategoryProps) {
    return (
        <div className="lg:w-80">
            <Card className="mb-6">
                <CardContent className="p-0">
                    <div className="bg-green-700 text-white p-4 rounded-t-lg">
                        <h2 className="font-bold flex items-center gap-2">
                            <Grid className="h-5 w-5" />
                            DANH MỤC SẢN PHẨM
                        </h2>
                    </div>
                    <div className="p-2">
                        <Button
                            variant={selectedCategory === "all" ? "default" : "ghost"}
                            className={`w-full justify-between mb-1 ${selectedCategory === "all" ? "bg-green-700 hover:bg-green-600" : "hover:bg-green-700"}`}
                            onClick={() => setSelectedCategory("all")}
                        >
                            <span>Tất cả sản phẩm</span>
                            <Badge variant="secondary" className="bg-red-600 text-white  rounded-full">{products.length}</Badge>
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "ghost"}
                                className={`w-full justify-between mb-1 hover:cursor-pointer hover:bg-green-600  ${selectedCategory === category.id ? "bg-green-700 cursor-pointer hover:bg-green-600" : "hover:bg-green-50"}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                <span className="flex items-center gap-2">
                                    <span>{category.icon}</span>
                                    {category.name}
                                </span>
                                <Badge variant="secondary" className='bg-red-600 text-white rounded-full'>{category.count}</Badge>
                            </Button>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
