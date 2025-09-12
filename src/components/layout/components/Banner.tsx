"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Minus, Plus } from 'lucide-react'
import { heroSlides, freshVegetables, freshFruits, featuredProducts } from '@/components/Mock/MockData'

export default function Banner() {


    return (
        <>
            <main className="flex-1 space-y-8">
          

                {/* Category Cards */}
               

                {/* Product Sections */}


                <section>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full mb-4">
                            <h2 className="text-xl font-bold">RAU TƯƠI MỚI</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tìm trực vệ sinh an toàn thực phẩm cập nhật mới nhất
                        </p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">mỗi ngày cho bạn</p>
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
                                {freshVegetables.map((product) => (
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
                                {freshFruits.map((product) => (
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
                </section>

                <section>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full mb-4">
                            <h2 className="text-xl font-bold">TIN CẬP NHẬT</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Tin tức về sinh an toàn thực phẩm cập nhật mới nhất
                        </p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">mỗi ngày cho bạn</p>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {newsArticles.map((article) => (
                            <Card key={article.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <img
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                                        <Button className="w-full bg-primary hover:bg-primary/90">CHI TIẾT</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div> */}
                </section>

                <section>
                    <div className="text-center mb-8">
                        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full mb-4">
                            <h2 className="text-xl font-bold">PHẢN HỒI CỦA KHÁCH</h2>
                        </div>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Phản hồi của những khách hàng đã và đang sử dụng sản phẩm
                        </p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">trong suốt những năm qua</p>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {customerTestimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                                            <p className="text-sm text-foreground">{testimonial.role}</p>
                                            <div className="flex items-center mt-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20" />
                                        <p className="text-muted-foreground text-sm leading-relaxed pl-4">{testimonial.content}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div> */}
                </section>

                {/* Featured Products */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-foreground">Sản phẩm nổi bật</h2>
                        <Button variant="ghost" className="text-primary">
                            Xem tất cả
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {featuredProducts.map((product) => (
                            <Card key={product.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-3">
                                    <div className="relative mb-3">
                                        <img
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-32 object-cover rounded-md"
                                        />
                                        {product.discount > 0 && (
                                            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
                                                -{product.discount}%
                                            </Badge>
                                        )}
                                    </div>

                                    <h3 className="font-medium text-sm mb-2 text-foreground text-balance">{product.name}</h3>

                                    <div className="flex items-center mb-2">
                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
                                        <span className="text-xs text-muted-foreground ml-2">Đã bán {product.sold}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-primary font-bold">{product.price}đ</span>
                                            {product.originalPrice && (
                                                <span className="text-xs text-muted-foreground line-through">{product.originalPrice}đ</span>
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground">/{product.unit}</p>

                                        <div className="flex items-center justify-between mt-3">
                                            <div className="flex items-center space-x-2">
                                                <Button size="icon" variant="outline" className="h-6 w-6 bg-transparent">
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="text-sm font-medium">1</span>
                                                <Button size="icon" variant="outline" className="h-6 w-6 bg-transparent">
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                            <Button size="sm" className="text-xs">
                                                Thêm
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
