"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import LoginForm from "@/components/auth/Login/components/LoginForm"
import LoginFormContent from "@/components/auth/Login/components/LoginFormContent"

export default function page() {
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
            <div className="lg:col-span-6 bg-gradient-to-br from-primary via-green-600 to-green-700 relative overflow-hidden hidden lg:flex flex-col justify-center items-center p-12">
                <div className="absolute inset-0 bg-[url('/organic-vegetables-pattern.jpg')] opacity-10"></div>
                {/* Content */}
                <LoginFormContent />
            </div>

            <div className="lg:col-span-4 flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 lg:hidden">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        <span>Quay lại trang chủ</span>
                    </Link>

                    <div className="text-center mb-8 lg:hidden">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-white font-bold text-xl">BHX</span>
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">Bách Hóa Xanh</h1>
                    </div>
                    <LoginForm handleSubmit={handleSubmit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} showPassword={showPassword} setShowPassword={setShowPassword} rememberMe={rememberMe} setRememberMe={setRememberMe} />
                </div>
            </div>
        </div>

    )
}
