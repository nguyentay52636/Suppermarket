import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { freshVegetables, freshFruits, featuredProducts } from '@/components/Mock/MockData'
export default function Product() {
    return (
        <>
            <div className="bg-primary text-primary-foreground rounded-t-lg px-6 py-3 inline-block">
                <h2 className="text-xl font-bold">TRÁI CÂY MỖI NGÀY</h2>
            </div>
            <div className="text-center text-muted-foreground mb-4">
                <p className="text-sm">Tìm trực vệ sinh an toàn thực phẩm cập nhật mới nhất</p>
                <p className="text-sm">mỗi ngày cho bạn</p>
            </div>

            <Tabs defaultValue="rau-cu" className="w-full">
                <div className="flex justify-end mb-4">
                    <TabsList className="grid w-auto grid-cols-4">
                        <TabsTrigger value="rau-cu">Rau củ</TabsTrigger>
                        <TabsTrigger value="hoa-qua">Hoa quả</TabsTrigger>
                        <TabsTrigger value="thit">Thịt</TabsTrigger>
                        <TabsTrigger value="hai-san">Hải sản</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="rau-cu">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {freshVegetables.map((product: any) => (
                            <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-3">
                                    <div className="relative mb-3">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md"
                                        />
                                    </div>
                                    <h3 className="font-medium text-sm mb-2 text-center text-primary">{product.name}</h3>
                                    <p className="text-center text-lg font-bold text-orange-500">{product.price} đ</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="hoa-qua">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {freshFruits.map((product: any) => (
                            <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-3">
                                    <div className="relative mb-3">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md"
                                        />
                                    </div>
                                    <h3 className="font-medium text-sm mb-2 text-center text-primary">{product.name}</h3>
                                    <p className="text-center text-lg font-bold text-orange-500">{product.price} đ</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="thit">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {featuredProducts.slice(1, 2).map((product) => (
                            <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-3">
                                    <div className="relative mb-3">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md"
                                        />
                                    </div>
                                    <h3 className="font-medium text-sm mb-2 text-center text-primary">{product.name}</h3>
                                    <p className="text-center text-lg font-bold text-orange-500">{product.price} đ</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="hai-san">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                            <CardContent className="p-3">
                                <div className="relative mb-3">
                                    <img
                                        src="/fresh-fish-seafood.jpg"
                                        alt="Cá tươi"
                                        className="w-full h-32 object-cover rounded-md"
                                    />
                                </div>
                                <h3 className="font-medium text-sm mb-2 text-center text-primary">Cá tươi</h3>
                                <p className="text-center text-lg font-bold text-orange-500">120.000 đ</p>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>

        </>

    )
}
