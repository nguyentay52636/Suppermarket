import { Card, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Mail, Phone, MoreHorizontal, Eye, Edit, Trash2, Filter, DollarSign, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import ActionTableEmployee from './components/ActionTableEmployee'
// import DialogViewDetailsEmployee from './components/Dialog/DialogViewDetailsEmployee'
// import DialogEditEmployee from './components/Dialog/DialogEditEmployee'
import { toast } from 'sonner';
// import { deleteEmployee } from '@/lib/apis/employeeApi'
// import DialogConfirmDeleteEmployee from './components/Dialog/DialogConfirmDeleteEmployee'
export interface Employee {
    _id?: string
    nguoiDungId?: string
    phongBan: string
    chucVu: string
    luong: number
    hieuSuat: number
    ngayVaoLam: Date
    trangThai: string
    createdAt?: string
    updatedAt?: string
    __v?: number
}
export default function ManagerEmployeeTable({ filteredEmployees, searchQuery, setSearchQuery, getPositionIcon, getPositionLabel, getDepartmentLabel, getStatusBadge }: { filteredEmployees: any, searchQuery: any, setSearchQuery: any, getPositionIcon: any, getPositionLabel: any, getDepartmentLabel: any, getStatusBadge: any }) {
    const [selectedEmployee, setSelectEmployee] = useState<Employee | null>(null);
    const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [employeeDelete, setEmployeeDelete] = useState<Employee | null>(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const employees = filteredEmployees || []
    const handleViewDetails = (employee: Employee) => {
        setSelectEmployee(employee);
        setIsViewDialogOpen(true);
    }
    const handleDeleteClick = (employee: Employee) => {
        setEmployeeDelete(employee);
        setIsDeleteDialogOpen(true);
    };
    const handleEdit = (employee: Employee) => {
        setSelectEmployee(employee)
        setIsUpdateDialogOpen(true);


    };
    // const handleConfirmDelete = async () => {
    //     if (!employeeDelete) return
    //     try {
    //         await deleteEmployee(employeeDelete._id as string)
    //         toast.success("Xóa nhân viên thành công!", {
    //             description: `Nhân viên: ${employeeDelete.nguoiDungId?.ten || ""}`,
    //             duration: 3000,
    //             position: 'top-center',
    //             style: { background: '#4CAF50', color: 'white', border: 'none' },
    //         });
    //         setIsDeleteDialogOpen(false);
    //         setEmployeeDelete(null);
    //     } catch (error: any) {
    //         toast.error('Lỗi khi xóa sản phẩm ❌', {
    //             description: 'Đã xảy ra lỗi. Vui lòng thử lại.',
    //             duration: 3000,
    //             position: 'top-center',
    //             style: { background: '#F44336', color: 'white', border: 'none' },
    //         });
    //     } finally {
    //         setIsDeleting(false);
    //     }
    // }
    return (
        <>
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <CardTitle className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                                    <Users className="h-4 w-4 text-white" />
                                </div>
                                <span>Danh sách nhân viên</span>
                            </CardTitle>
                            <CardDescription>
                                Quản lý và theo dõi tất cả nhân viên ({employees.length} nhân viên)
                            </CardDescription>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <Input
                                    placeholder="Tìm kiếm nhân viên..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 w-64 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400"
                                />
                            </div>
                            <Button variant="outline" size="sm" className="hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent">
                                <Filter className="h-4 w-4 mr-2" />
                                Lọc
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="max-h-[600px] overflow-y-auto">
                            <Table>
                                <TableHeader className="sticky top-0 bg-gray-50 dark:bg-gray-800/50 z-10">
                                    <TableRow>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Nhân viên</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Liên hệ</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Vị trí</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Phòng ban</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Trạng thái</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Hiệu suất</TableHead>
                                        <TableHead className="font-semibold bg-gray-50 dark:bg-gray-800/50">Lương (VNĐ)</TableHead>
                                        <TableHead className="min-w-[100px] text-right">Hành động</TableHead>

                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {employees.map((person: any) => (
                                        <TableRow key={person._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                            <TableCell>
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative">
                                                        <Avatar className="h-10 w-10 border-2 border-gray-200 dark:border-gray-700">
                                                            <AvatarImage src={person.nguoiDungId.anhDaiDien || "/placeholder.svg"} alt={person.nguoiDungId.ten} />
                                                            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                                                                {person.nguoiDungId.ten.charAt(0)}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-900 dark:text-gray-100">{person.nguoiDungId.ten}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                                            ID: #{person.nguoiDungId._id.toString().padStart(3, "0")}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-2">
                                                    <div className="flex items-center text-sm bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-1">
                                                        <Mail className="h-3 w-3 mr-2 text-blue-600" />
                                                        <span className="truncate">{person.nguoiDungId.email}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-1">
                                                        <Phone className="h-3 w-3 mr-2 text-green-600" />
                                                        <span>{person.nguoiDungId.soDienThoai}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    {getPositionIcon(person.chucVu)}
                                                    <span className="font-medium">{getPositionLabel(person.chucVu)}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="border-gray-300 dark:border-gray-600">
                                                    {getDepartmentLabel(person.phongBan)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{getStatusBadge(person.trangThai)}</TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                        <div
                                                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-300"
                                                            style={{ width: `${person.hieuSuat}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">{person.hieuSuat}%</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center space-x-1 font-semibold text-green-600">
                                                    <DollarSign className="h-4 w-4" />
                                                    <span>{Number.parseInt(person.luong).toLocaleString("vi-VN")}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <ActionTableEmployee
                                                    employee={person}
                                                    onEdit={handleEdit}
                                                    handleView={handleViewDetails}
                                                    handleDelete={handleDeleteClick}
                                                />

                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </CardContent>
            </Card>
            {/* <DialogViewDetailsEmployee
                open={isViewDialogOpen}
                onOpenChange={setIsViewDialogOpen}
                staff={selectedEmployee}
            />
            {selectedEmployee && (
                <DialogEditEmployee
                    open={isUpdateDialogOpen}
                    onOpenChange={setIsUpdateDialogOpen}
                    staff={selectedEmployee}
                    onUpdateSuccess={() => { }}
                />
            )}
            <DialogConfirmDeleteEmployee
                isOpen={isDeleteDialogOpen}
                onOpenChange={setIsDeleteDialogOpen}
                onConfirm={handleConfirmDelete}
                isLoading={isDeleting}
                productName={employeeDelete?.nguoiDungId?.ten}
            /> */}
        </>
    )
}