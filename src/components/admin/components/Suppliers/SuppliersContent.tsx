"use client"

import { useState } from "react"
import { NhaCungCap } from "@/apis/types"
import StatsCard from "./components/ManagerTableSuppliers/StatsCard"
import SearchAction from "./components/SearchAction"
import ManagerTableSuppliers from "./components/ManagerTableSuppliers/ManagerTableSuppliers"
import ViewDetailsSuppliers from "./components/Dialog/ViewDetailsSuppliers/ViewDetailsSuppliers"
import ImportCard from "./components/Dialog/ImportCard/ImportCard"
import { mockSuppliers, mockProducts } from "./components/ManagerTableSuppliers/data"
import DialogAddSupplier from "./components/Dialog/AddSupplier/DialogAddSupplier"
import PaginationSuppliers from "./components/PaginationSuppliers"



export default function SuppliersContent() {
    const [suppliers, setSuppliers] = useState<NhaCungCap[]>(mockSuppliers)
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState<string>("all")
    const [selectedSupplier, setSelectedSupplier] = useState<NhaCungCap | null>(null)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)
    const [isImportDialogOpen, setIsImportDialogOpen] = useState(false)

    // Filter suppliers
    const filteredSuppliers = suppliers.filter((supplier) => {
        const matchesSearch =
            supplier.tenNhaCungCap.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.maNhaCungCap.toLowerCase().includes(searchTerm.toLowerCase()) ||
            supplier.email.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === "all" || supplier.trangThai === statusFilter
        return matchesSearch && matchesStatus
    })

    // Stats calculations
    const totalSuppliers = suppliers.length
    const activeSuppliers = suppliers.filter((s) => s.trangThai === "active").length
    const inactiveSuppliers = suppliers.filter((s) => s.trangThai === "inactive").length

    const handleAddSupplier = (data: Partial<NhaCungCap>) => {
        const newSupplier: NhaCungCap = {
            ...(data as NhaCungCap),
            ngayTao: new Date().toISOString().split("T")[0],
        }
        setSuppliers([...suppliers, newSupplier])
        setIsAddDialogOpen(false)
    }

    const handleEditSupplier = (data: Partial<NhaCungCap>) => {
        setSuppliers(suppliers.map((s) => (s.maNhaCungCap === selectedSupplier?.maNhaCungCap ? { ...s, ...data } : s)))
        setIsEditDialogOpen(false)
        setSelectedSupplier(null)
    }

    const handleDeleteSupplier = (maNhaCungCap: string) => {
        setSuppliers(suppliers.filter((s) => s.maNhaCungCap !== maNhaCungCap))
    }

    const handleImportGoods = (data: {
        ngayNhap: string
        chiTietPhieuNhap: any[]
        tongTien: number
    }) => {
        console.log("Import goods data:", data)
        setIsImportDialogOpen(false)
        setSelectedSupplier(null)
    }

    return (
        <div className=" bg-gradient-to-br from-green-50 via-blue-50 to-white p-6">
            <div className=" mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Quản lý nhà cung cấp</h1>
                        <p className="text-gray-600 mt-1">Quản lý thông tin nhà cung cấp và nhập hàng</p>{" "}
                    </div>
                    <DialogAddSupplier isAddDialogOpen={isAddDialogOpen} setIsAddDialogOpen={setIsAddDialogOpen} handleAddSupplier={handleAddSupplier} />
                </div>

                <StatsCard totalSuppliers={totalSuppliers} activeSuppliers={activeSuppliers} inactiveSuppliers={inactiveSuppliers} />

                <SearchAction searchTerm={searchTerm} setSearchTerm={setSearchTerm} statusFilter={statusFilter} setStatusFilter={setStatusFilter} />

                <ManagerTableSuppliers suppliers={suppliers} filteredSuppliers={filteredSuppliers} setSelectedSupplier={setSelectedSupplier} setIsImportDialogOpen={setIsImportDialogOpen} setIsDetailDialogOpen={setIsDetailDialogOpen} setIsEditDialogOpen={setIsEditDialogOpen} handleDeleteSupplier={handleDeleteSupplier} />

                <ViewDetailsSuppliers mockProducts={mockProducts} isDetailDialogOpen={isDetailDialogOpen} setIsDetailDialogOpen={setIsDetailDialogOpen} selectedSupplier={selectedSupplier} setSelectedSupplier={setSelectedSupplier} handleEditSupplier={handleEditSupplier} setIsEditDialogOpen={setIsEditDialogOpen} setIsImportDialogOpen={setIsImportDialogOpen} />

                <PaginationSuppliers totalItems={filteredSuppliers.length} />

                <ImportCard isImportDialogOpen={isImportDialogOpen} setIsImportDialogOpen={setIsImportDialogOpen} selectedSupplier={selectedSupplier} setSelectedSupplier={setSelectedSupplier} handleImportGoods={handleImportGoods} />
            </div>
        </div>
    )
}
