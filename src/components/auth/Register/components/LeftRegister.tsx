import React from 'react'

export default function LeftRegister() {
    return (
        <div className="lg:col-span-6 bg-gradient-to-br from-primary via-green-600 to-green-700 relative overflow-hidden hidden lg:flex flex-col justify-center items-center p-12">
            <div className="absolute inset-0 bg-black/40" style={{
                backgroundImage:
                    "url('https://img.lovepik.com/bg/20240324/Vibrant-Green-Backdrop-3D-Abstract-Podiums-and-Palm-Shadows-Background_5575321_wh860.jpg!/fw/860')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
            }}></div>
            <div className="relative z-10 text-center text-white max-w-lg">
                <div className="mb-8">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <span className="text-white font-bold text-3xl">BHX</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">Tham gia cộng đồng</h1>
                    <p className="text-xl text-green-100 mb-8">Hàng triệu khách hàng tin tưởng lựa chọn</p>
                </div>

                <div className="space-y-6 text-left">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Tích điểm thưởng</h3>
                            <p className="text-green-100">Mỗi đơn hàng đều được tích điểm và đổi quà</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Ưu đãi độc quyền</h3>
                            <p className="text-green-100">Khuyến mãi đặc biệt dành riêng cho thành viên</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Theo dõi đơn hàng</h3>
                            <p className="text-green-100">Cập nhật trạng thái giao hàng theo thời gian thực</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
