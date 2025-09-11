"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import LoginForm from "@/components/auth/Login/components/LoginForm"
import LoginFormContent from "@/components/auth/Login/components/LoginFormContent"

export default function Page() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Login attempt:", { email, password, rememberMe })
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-10">
            <div
                className="lg:col-span-6 bg-gradient-to-br from-primary via-green-600 to-green-700 relative overflow-hidden hidden lg:flex flex-col justify-center items-center p-12"

            >
                <div className="absolute inset-0 bg-black/40" style={{
                    backgroundImage:
                        "url('https://img.lovepik.com/bg/20240324/Vibrant-Green-Backdrop-3D-Abstract-Podiums-and-Palm-Shadows-Background_5575321_wh860.jpg!/fw/860')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                }}></div>

                {/* Content */}
                <div className="relative z-10">
                    <LoginFormContent />
                </div>
            </div>

            {/* Cột phải */}
            <div className="lg:col-span-4 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <Link
                        href="/"
                        className="inline-flex items-center text-primary hover:text-primary/80 mb-6 lg:hidden"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        <span>Quay lại trang chủ</span>
                    </Link>

                    <div className="text-center mb-8 lg:hidden">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">BHX</span>
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">Bách Hóa Xanh</h1>
                    </div>

                    <LoginForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        rememberMe={rememberMe}
                        setRememberMe={setRememberMe}
                    />
                    <div className="text-center mt-6">
                        <span className="text-muted-foreground">Chưa có tài khoản? </span>
                        <Link href="/auth/register" className="text-primary hover:text-primary/80 font-medium">
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
