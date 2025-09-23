"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

interface ReceiptInfoCardProps {
    ngayNhap: string
    setNgayNhap: (date: string) => void
}

export function ReceiptInfoCard({ ngayNhap, setNgayNhap }: ReceiptInfoCardProps) {
    return (
        <Card className="bg-gradient-to-r from-blue-100 via-blue-50 to-cyan-100 border-blue-300 shadow-lg">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-blue-800 text-xl">
                    <div className="p-2 bg-blue-200 rounded-full">
                        <Calendar className="h-6 w-6 text-blue-700" />
                    </div>
                    Thông tin phiếu nhập
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="ngayNhap" className="text-blue-700 font-semibold flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Ngày nhập *
                        </Label>
                        <Input
                            id="ngayNhap"
                            type="date"
                            value={ngayNhap}
                            onChange={(e) => setNgayNhap(e.target.value)}
                            required
                            className="border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-blue-700 font-semibold">Mã phiếu nhập</Label>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                            <p className="text-blue-600 font-medium">Sẽ được tạo tự động sau khi lưu</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}


