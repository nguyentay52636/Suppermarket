import { NhaCungCap } from "@/apis/types"

export const mockSuppliers: NhaCungCap[] = [
    {
        maNhaCungCap: "NCC001",
        tenNhaCungCap: "Công ty TNHH Thực phẩm Sạch Việt",
        diaChi: "123 Đường Nguyễn Văn Cừ, Quận 5, TP.HCM",
        soDienThoai: "0123456789",
        email: "contact@thucphamsach.com",
        trangThai: "active",
        ngayTao: "2024-01-15",
        moTa: "Chuyên cung cấp rau củ quả sạch, organic",
    },
    {
        maNhaCungCap: "NCC002",
        tenNhaCungCap: "Tập đoàn Thực phẩm An Toàn",
        diaChi: "456 Đường Lê Văn Việt, Quận 9, TP.HCM",
        soDienThoai: "0987654321",
        email: "info@thucphamantoan.com",
        trangThai: "active",
        ngayTao: "2024-02-20",
        moTa: "Cung cấp thịt, cá tươi sống chất lượng cao",
    },
    {
        maNhaCungCap: "NCC003",
        tenNhaCungCap: "Công ty Sữa Tươi Đà Lạt",
        diaChi: "789 Đường Trần Hưng Đạo, Đà Lạt, Lâm Đồng",
        soDienThoai: "0369852147",
        email: "sales@suatuoiDalat.com",
        trangThai: "inactive",
        ngayTao: "2024-03-10",
        moTa: "Sản xuất và phân phối các sản phẩm từ sữa",
    },
]

export const mockProducts: SanPham[] = [
    {
        maSanPham: "SP001",
        tenSanPham: "Cà chua cherry",
        donVi: "kg",
        giaNhap: 25000,
        soLuongTon: 150,
        trangThai: "active",
    },
    {
        maSanPham: "SP002",
        tenSanPham: "Thịt ba chỉ heo",
        donVi: "kg",
        giaNhap: 180000,
        soLuongTon: 50,
        trangThai: "active",
    },
    {
        maSanPham: "SP003",
        tenSanPham: "Sữa tươi không đường",
        donVi: "hộp",
        giaNhap: 12000,
        soLuongTon: 200,
        trangThai: "active",
    },
]