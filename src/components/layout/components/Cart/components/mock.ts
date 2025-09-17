export interface CartItem {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    quantity: number
    category: string
    inStock: boolean
    unit: string
}
export const cartItems: CartItem[] = [
    {
        id: "1",
        name: "Gạo ST25 túi 5kg",
        price: 125000,
        originalPrice: 150000,
        image: "https://cdn.tgdd.vn/Files/2014/09/25/569033/10-loai-trai-cay-cap-cuu-khi-bi-benh1.jpg",
        quantity: 2,
        category: "Thực phẩm khô",
        inStock: true,
        unit: "kg",
    },
    {
        id: "2",
        name: "Thịt heo ba chỉ 500g",
        price: 85000,
        image: "https://cdn.tgdd.vn/Files/2014/09/25/569033/10-loai-trai-cay-cap-cuu-khi-bi-benh1.jpg",
        quantity: 1,
        category: "Thịt tươi",
        inStock: true,
        unit: "kg",
    },
    {
        id: "3",
        name: "Rau cải ngọt 300g",
        price: 15000,
        image: "/assorted-green-vegetables.png",
        quantity: 3,
        category: "Rau củ",
        inStock: false,
        unit: "kg",
    },
]