import { Users, Package, MapPin, Award } from "lucide-react"

export function SectionStats() {
    const stats = [
        {
            icon: Users,
            value: "50K+",
            label: "Khách hàng tin tưởng",
            description: "Phục vụ hàng ngàn gia đình",
        },
        {
            icon: Package,
            value: "10K+",
            label: "Sản phẩm đa dạng",
            description: "Từ thực phẩm đến đồ gia dụng",
        },
        {
            icon: MapPin,
            value: "100+",
            label: "Khu vực giao hàng",
            description: "Phủ sóng toàn thành phố",
        },
        {
            icon: Award,
            value: "5 năm",
            label: "Kinh nghiệm phục vụ",
            description: "Uy tín được khẳng định",
        },
    ]

    return (
        <section className="py-16 bg-gradient-to-r from-green-50 to-green-100/50 rounded-3xl">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-balance">Tại sao chọn Bách Hóa Xanh?</h2>
                    <p className="text-lg text-muted-foreground text-pretty">
                        Những con số ấn tượng khẳng định chất lượng dịch vụ của chúng tôi
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow">
                                <stat.icon className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-3xl font-bold text-green-600">{stat.value}</p>
                                <p className="font-semibold text-gray-900">{stat.label}</p>
                                <p className="text-sm text-muted-foreground text-pretty">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
