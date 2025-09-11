import React from 'react'

export default function LoginFormContent() {
    return (
        <div className="relative z-10 text-center text-white max-w-lg">
        <div className="mb-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <span className="text-white font-bold text-3xl">BHX</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Bách Hóa Xanh</h1>
            <p className="text-xl text-green-100 mb-8">Thực phẩm tươi sạch cho mọi gia đình</p>
        </div>

        <div className="space-y-6 text-left">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Thực phẩm tươi sạch</h3>
                    <p className="text-green-100">Nguồn gốc rõ ràng, chất lượng đảm bảo</p>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Giao hàng nhanh chóng</h3>
                    <p className="text-green-100">Miễn phí vận chuyển trong bán kính 100km</p>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Hỗ trợ 24/7</h3>
                    <p className="text-green-100">Đội ngũ tư vấn nhiệt tình, chuyên nghiệp</p>
                </div>
            </div>
        </div>
    </div>
    )
}
