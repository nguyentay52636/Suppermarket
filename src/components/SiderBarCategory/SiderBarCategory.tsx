import { ChevronRight, List } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiderBarCategory() {
    const categories = [
        "Rau sạch",
        "Thịt tươi",
        "Hải sản tươi",
        "Hoa quả tươi",
        "Nhập khẩu",
        "Cá Nhật Bản",
        "Rau Đà Lạt",
        "Hoa quả nhập",
        "Thực phẩm khác",
    ]

    return (
        <aside className="w-90 h-full hidden lg:block">
            <div className="rounded-xl border shadow-sm overflow-hidden hover:bg-green-700">
                <div
                    style={{
                        backgroundColor: "#16a34a",
                        color: "#ffffff",
                        padding: "1rem 1.5rem",
                    }}
                >
                    <div className="flex items-center gap-2  rounded-xl" style={{ color: "#ffffff" }}>
                        <div className=" cursor-pointer"><List className="h-6 w-6" /></div>
                        <h3 className="text-md font-semibold leading-none ">
                            DANH MỤC SẢN PHẨM
                        </h3>
                    </div>
                </div>
                <div className="bg-white">
                    {categories.map((category, index) => (
                        <Button
                            key={index}
                            variant="ghost"
                            className="w-full justify-between cursor-pointer rounded-none border-b border-gray-200 last:border-b-0 py-3 px-4 text-left hover:bg-gray-50"
                        >
                            <span>{category}</span>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    ))}
                </div>
            </div>
        </aside>
    )
}
