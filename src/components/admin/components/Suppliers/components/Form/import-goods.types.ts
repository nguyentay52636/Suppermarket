export interface SupplierProduct {
    maSanPham: string
    tenSanPham: string
    donVi: string
    giaBan: number
    giaNhap?: number
    soLuongTon: number
    trangThai: "active" | "inactive" | "out-of-stock"
    hinhAnh?: string
    moTa?: string
    xuatXu?: string
    hanSuDung?: string
}


