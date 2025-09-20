export interface Product {
    maSanPham: string
    tenSanPham: string
    donVi: string
    soLuongTon: number
    maThuongHieu: string
    maDanhMuc: string
    maLoai: string
    moTa: string
    giaBan: number
    hinhAnh: string
    xuatXu: string
    hsd: string
    trangThai: "active" | "inactive" | "out-of-stock"
    categoryName?: string
    brandName?: string
    typeName?: string
    createdAt?: string
    updatedAt?: string
}
 export const mockProducts: Product[] = [
    {
        maSanPham: "SP001",
        tenSanPham: "Táo Gala mini nhập khẩu",
        donVi: "trái",
        soLuongTon: 150,
        maThuongHieu: "TH001",
        maDanhMuc: "DM001",
        maLoai: "ML001",
        moTa: "Táo Gala mini tươi ngon nhập khẩu từ New Zealand",
        giaBan: 33600,
        hinhAnh: "/red-apples.png",
        xuatXu: "New Zealand",
        hsd: "2024-02-15",
        trangThai: "active",
        categoryName: "Trái cây",
        brandName: "Fresh Import",
        typeName: "Táo",
        createdAt: "2024-01-15",
        updatedAt: "2024-01-20",
    },
    {
        maSanPham: "SP002",
        tenSanPham: "Nho mẫu đơn nội địa",
        donVi: "hộp",
        soLuongTon: 80,
        maThuongHieu: "TH002",
        maDanhMuc: "DM001",
        maLoai: "ML002",
        moTa: "Nho mẫu đơn tươi ngon trồng tại Ninh Thuận",
        giaBan: 49000,
        hinhAnh: "/green-grapes.png",
        xuatXu: "Ninh Thuận",
        hsd: "2024-02-10",
        trangThai: "active",
        categoryName: "Trái cây",
        brandName: "Ninh Thuận Farm",
        typeName: "Nho",
        createdAt: "2024-01-10",
        updatedAt: "2024-01-18",
    },
    {
        maSanPham: "SP003",
        tenSanPham: "Cà rốt tím hữu cơ",
        donVi: "gói",
        soLuongTon: 0,
        maThuongHieu: "TH003",
        maDanhMuc: "DM002",
        maLoai: "ML003",
        moTa: "Cà rốt tím hữu cơ giàu anthocyanin",
        giaBan: 35000,
        hinhAnh: "/placeholder-4qoa1.png",
        xuatXu: "Đà Lạt",
        hsd: "2024-02-05",
        trangThai: "out-of-stock",
        categoryName: "Rau củ",
        brandName: "Organic Viet",
        typeName: "Cà rốt",
        createdAt: "2024-01-05",
        updatedAt: "2024-01-22",
    },
    {
        maSanPham: "SP004",
        tenSanPham: "Thịt heo C.P ba chỉ",
        donVi: "khay",
        soLuongTon: 25,
        maThuongHieu: "TH004",
        maDanhMuc: "DM003",
        maLoai: "ML004",
        moTa: "Thịt heo ba chỉ tươi C.P chất lượng cao",
        giaBan: 120000,
        hinhAnh: "/placeholder-yzv3n.png",
        xuatXu: "Việt Nam",
        hsd: "2024-01-25",
        trangThai: "active",
        categoryName: "Thịt",
        brandName: "C.P Vietnam",
        typeName: "Thịt heo",
        createdAt: "2024-01-12",
        updatedAt: "2024-01-21",
    },
    {
        maSanPham: "SP005",
        tenSanPham: "Cá hồi Na Uy phi lê",
        donVi: "khay",
        soLuongTon: 15,
        maThuongHieu: "TH005",
        maDanhMuc: "DM004",
        maLoai: "ML005",
        moTa: "Cá hồi Na Uy phi lê tươi sống",
        giaBan: 280000,
        hinhAnh: "/pan-seared-salmon.png",
        xuatXu: "Na Uy",
        hsd: "2024-01-30",
        trangThai: "active",
        categoryName: "Hải sản",
        brandName: "Nordic Seafood",
        typeName: "Cá hồi",
        createdAt: "2024-01-08",
        updatedAt: "2024-01-19",
    },
]
