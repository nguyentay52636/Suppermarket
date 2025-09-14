import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Gift } from "lucide-react"

export function NewsletterSection() {
    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

                    <div className="relative z-10 text-center space-y-6">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto">
                            <Mail className="w-8 h-8 text-white" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Nhận ưu đãi đặc biệt</h2>
                            <p className="text-lg text-green-100 text-pretty max-w-2xl mx-auto">
                                Đăng ký nhận thông tin về các chương trình khuyến mãi, sản phẩm mới và nhận ngay voucher giảm giá 10%
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <Input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="bg-white/20 border-white/30 text-white placeholder:text-green-100 focus:bg-white/30"
                            />
                            <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8">
                                <Gift className="w-4 h-4 mr-2" />
                                Đăng ký
                            </Button>
                        </div>

                        <p className="text-sm text-green-200">
                            * Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng của chúng tôi
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
