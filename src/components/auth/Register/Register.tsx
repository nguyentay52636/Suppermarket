
"use client"

import type React from "react"
import { useState } from "react"
import { ArrowLeft } from "lucide-react"

import Link from "next/link"
import FormRegister from "./components/FormRegister"
import LeftRegister from "./components/LeftRegister"

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
        birthDate: "",
        agreeTerms: false,
        receiveNews: false,
    })

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Registration attempt:", formData)
    }

    return (
        <div className="min-h-screen grid lg:grid-cols-10">
            <LeftRegister />

            <div className="lg:col-span-4 flex items-center justify-center p-8 bg-white overflow-y-auto">
                <div className="w-full max-w-md">

                    <FormRegister handleSubmit={handleSubmit} formData={formData} handleInputChange={handleInputChange} showPassword={showPassword} setShowPassword={setShowPassword} showConfirmPassword={showConfirmPassword} setShowConfirmPassword={setShowConfirmPassword} />

                    {/* Login Link */}
                    <div className="text-center mt-6">
                        <span className="text-muted-foreground">Đã có tài khoản? </span>
                        <Link href="/auth/login" className="text-primary hover:text-primary/80 font-medium">
                            Đăng nhập ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
