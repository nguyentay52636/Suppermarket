import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
    {
        title: "Rau củ tươi",
        desc: "Được kiểm định rõ ràng",
        image: "/placeholder-p7jar.png",
        overlay: "bg-green-600/80",
    },
    {
        title: "Thực phẩm sạch",
        desc: "Quy trình sản xuất hữu cơ",
        image: "/placeholder-ulkov.png",
        overlay: "bg-orange-600/80",
    },
    {
        title: "Trái cây tươi",
        desc: "Nhập khẩu và trong nước",
        image: "/placeholder-ltvv4.png",
        overlay: "bg-purple-600/80",
    },
];

export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 m-6">
            {items.map((item, index) => (
                <Card
                    key={index}
                    className="relative overflow-hidden h-[300px]! cursor-pointer hover:shadow-lg transition-shadow h-48"
                >
                    <div
                        className="absolute  inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.image}')` }}
                    ></div>
                    <div className={`absolute inset-0 ${item.overlay}`}></div>
                    <CardContent className="relative h-full flex flex-col justify-center items-center text-white p-6">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-center">{item.desc}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
