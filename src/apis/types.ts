export interface INhanVien {
    maNhanVien: string;
    tenNhanVien: string;
    gioiTinh: string;
    ngaySinh: string;
    anhDaiDien: string;
    soDienThoai: string;
    vaiTro: IVaiTro;
    trangThai: string;
}
export interface IVaiTro {
    maVaiTro: string,
    role: string,
    description: string
}

// update product
export interface PhieuNhap  {
    maPhieuNhap: string,
    ngayNhap: string, 
    maNhaCungCap: string,
  };
  
  // Nhà cung cấp
  export interface NhaCungCap  {
        maNhaCungCap: string,
    tenNhaCungCap: string,
    diaChi: string,
    soDienThoai: string,
    email: string,
    trangThai: "active" | "inactive",
  };
  
  export interface ChiTietPhieuNhap  {
    maChiTietPhieuNhap: string;
    maSanPham: string,
    maPhieuNhap: string;
    soLuong: number;
    donGia: number,
    thanhTien: number;
  };
  
  export interface SanPham  {
    maSanPham: string;
    tenSanPham: string;
    donVi: string;
    soLuongTon: number;
    maThuongHieu: string;
    maDanhMuc: string;
    maLoai: string;
    moTa: string;
    giaBan: number;
    hinhAnh: string;
    xuatXu: string;
    hsd: string; 
    trangThai: "active" | "inactive" | "out-of-stock";
    categoryName?: string;
    brandName?: string;
    typeName?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  