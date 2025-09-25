import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { NewAddressForm, NewBillingAddressForm } from '../types';

interface AddressFormProps {
    formData: NewAddressForm | NewBillingAddressForm;
    onFormChange: (field: string, value: string | boolean) => void;
    onSave: () => void;
    onCancel: () => void;
    isBilling?: boolean;
}

export default function AddressForm({
    formData,
    onFormChange,
    onSave,
    onCancel,
    isBilling = false
}: AddressFormProps) {
    const isBillingForm = isBilling && 'taxCode' in formData;

    return (
        <div className="mt-6 p-4 border-2 border-dashed border-green-200 rounded-lg bg-green-50/50">
            <h4 className="font-medium text-gray-900 mb-4">
                {isBillingForm ? 'Thêm địa chỉ thanh toán mới' : 'Thêm địa chỉ mới'}
            </h4>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name" className="text-gray-700">
                            {isBillingForm ? 'Tên/Tên công ty *' : 'Tên người nhận *'}
                        </Label>
                        <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => onFormChange('name', e.target.value)}
                            placeholder={isBillingForm ? 'Nhập tên hoặc tên công ty' : 'Nhập tên người nhận'}
                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    {!isBillingForm && (
                        <div>
                            <Label htmlFor="phone" className="text-gray-700">
                                Số điện thoại *
                            </Label>
                            <Input
                                id="phone"
                                value={'phone' in formData ? formData.phone : ''}
                                onChange={(e) => onFormChange('phone', e.target.value)}
                                placeholder="Nhập số điện thoại"
                                className="mt-1 focus:ring-green-500 focus:border-green-500"
                            />
                        </div>
                    )}
                </div>
                <div>
                    <Label htmlFor="address" className="text-gray-700">
                        {isBillingForm ? 'Địa chỉ thanh toán *' : 'Địa chỉ cụ thể *'}
                    </Label>
                    <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => onFormChange('address', e.target.value)}
                        placeholder="Số nhà, tên đường"
                        className="mt-1 focus:ring-green-500 focus:border-green-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="ward" className="text-gray-700">
                            Phường/Xã *
                        </Label>
                        <Input
                            id="ward"
                            value={formData.ward}
                            onChange={(e) => onFormChange('ward', e.target.value)}
                            placeholder="Chọn phường/xã"
                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <Label htmlFor="district" className="text-gray-700">
                            Quận/Huyện *
                        </Label>
                        <Input
                            id="district"
                            value={formData.district}
                            onChange={(e) => onFormChange('district', e.target.value)}
                            placeholder="Chọn quận/huyện"
                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                    <div>
                        <Label htmlFor="city" className="text-gray-700">
                            Tỉnh/Thành phố *
                        </Label>
                        <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => onFormChange('city', e.target.value)}
                            placeholder="Chọn tỉnh/thành phố"
                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                </div>
                {isBillingForm && (
                    <div>
                        <Label htmlFor="taxCode" className="text-gray-700">
                            Mã số thuế (nếu có)
                        </Label>
                        <Input
                            id="taxCode"
                            value={formData.taxCode}
                            onChange={(e) => onFormChange('taxCode', e.target.value)}
                            placeholder="Nhập mã số thuế"
                            className="mt-1 focus:ring-green-500 focus:border-green-500"
                        />
                    </div>
                )}
                {!isBillingForm && (
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="setAsDefault"
                            checked={'isDefault' in formData ? formData.isDefault : false}
                            onCheckedChange={(checked) => onFormChange('isDefault', checked === true)}
                            className="text-green-600"
                        />
                        <Label htmlFor="setAsDefault" className="text-gray-700 cursor-pointer">
                            Đặt làm địa chỉ mặc định
                        </Label>
                    </div>
                )}
                <div className="flex space-x-3">
                    <Button
                        onClick={onSave}
                        className="bg-green-600 hover:bg-green-700 text-white"
                    >
                        {isBillingForm ? 'Lưu địa chỉ thanh toán' : 'Lưu địa chỉ'}
                    </Button>
                    <Button variant="outline" onClick={onCancel}>
                        Hủy
                    </Button>
                </div>
            </div>
        </div>
    );
}
