"use client"
import { heroSlides } from '@/components/Mock/MockData'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function HeroBanner() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [heroSlides.length])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    }

    return (
        <div className="relative w-full bg-gradient-to-r from-green-500 via-green-400 to-green-600 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-1000"
                style={{
                    backgroundImage: `url('${heroSlides[currentSlide].background}')`,
                }}
            ></div>
            <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                <div className="transition-all duration-500 ease-in-out">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{heroSlides[currentSlide].title}</h1>
                    <p className="text-xl md:text-2xl mb-6 font-light">{heroSlides[currentSlide].subtitle}</p>
                    <Button variant="default" className=" cursor-pointer bg-white text-green-600 hover:bg-gray-300 font-semibold px-10! py-8!">
                        {heroSlides[currentSlide].buttonText}
                    </Button>
                </div>
            </div>

            <Button
                variant="outline"
                onClick={prevSlide}
                className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                size="icon"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            <Button
                variant="outline"
                onClick={nextSlide}
                className="absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
                size="icon"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </Button>

            <div className="absolute cursor-pointer bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                    <Button
                        variant="outline"
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white opacity-100" : "bg-white/50 opacity-70"
                            }`}
                    >
                        {index}
                    </Button>
                ))}
            </div>
        </div>
    )
}
