import React from 'react'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { User } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'lucide-react'
import { EyeOff } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Lock } from 'lucide-react'

interface FormRegisterProps {
    handleSubmit: (e: React.FormEvent) => void
    formData: any
    handleInputChange: (field: string, value: string | boolean) => void
    showPassword: boolean
    setShowPassword: (showPassword: boolean) => void
    showConfirmPassword: boolean
    setShowConfirmPassword: (showConfirmPassword: boolean) => void
}
export default function FormRegister({ handleSubmit, formData, handleInputChange, showPassword, setShowPassword, showConfirmPassword, setShowConfirmPassword }: FormRegisterProps) {
    return (
        <>
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

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-2">Đăng ký tài khoản</h2>
                    <p className="text-muted-foreground">Tạo tài khoản để trải nghiệm mua sắm tuyệt vời</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                            Họ và tên *
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Nhập họ và tên"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                className="pl-10 h-12 bg-input border-border focus:ring-ring"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                            Email *
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Nhập địa chỉ email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="pl-10 h-12 bg-input border-border focus:ring-ring"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                            Số điện thoại *
                        </Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="Nhập số điện thoại"
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                className="pl-10 h-12 bg-input border-border focus:ring-ring"
                                required
                            />
                        </div>
                    </div>

                    {/* Gender & Birth Date */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-foreground">Giới tính</Label>
                            <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                                <SelectTrigger className="h-12 bg-input border-border">
                                    <SelectValue placeholder="Chọn" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Nam</SelectItem>
                                    <SelectItem value="female">Nữ</SelectItem>
                                    <SelectItem value="other">Khác</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="birthDate" className="text-sm font-medium text-foreground">
                                Ngày sinh
                            </Label>
                            <Input
                                id="birthDate"
                                type="date"
                                value={formData.birthDate}
                                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                                className="h-12 bg-input border-border focus:ring-ring"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-foreground">
                            Mật khẩu *
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                                className="pl-10 pr-10 h-12 bg-input border-border focus:ring-ring"
                                required
                                minLength={6}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                            Xác nhận mật khẩu *
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Nhập lại mật khẩu"
                                value={formData.confirmPassword}
                                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                className="pl-10 pr-10 h-12 bg-input border-border focus:ring-ring"
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-12 px-3 hover:bg-transparent"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Terms & Newsletter */}
                    <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="agreeTerms"
                                checked={formData.agreeTerms}
                                onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                                className="mt-1"
                                required
                            />
                            <Label htmlFor="agreeTerms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                                Tôi đồng ý với{" "}
                                <Link href="/terms" className="text-primary hover:text-primary/80">
                                    Điều khoản sử dụng
                                </Link>{" "}
                                và{" "}
                                <Link href="/privacy" className="text-primary hover:text-primary/80">
                                    Chính sách bảo mật
                                </Link>{" "}
                                của Bách Hóa Xanh *
                            </Label>
                        </div>
                        <div className="flex items-start space-x-2 rounded-md">
                            <Checkbox
                                id="receiveNews"
                                checked={formData.receiveNews}
                                onCheckedChange={(checked) => handleInputChange("receiveNews", checked as boolean)}
                                className="mt-1"
                            />
                            <Label htmlFor="receiveNews" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                                Tôi muốn nhận thông tin khuyến mãi và tin tức mới nhất từ Bách Hóa Xanh
                            </Label>
                        </div>
                    </div>



                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                        disabled={!formData.agreeTerms}
                    >
                        <Link href="/auth/login" className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                            Đăng ký tài khoản
                        </Link>
                    </Button>

                </form>
            </div>
        </>
    )
}
