import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import { MapPin, Plus } from 'lucide-react';
import { Address, NewAddressForm } from '../types';
import AddressItem from './AddressItem';
import AddressForm from './AddressForm';

interface DeliveryAddressProps {
    savedAddresses: Address[];
    selectedAddress: string;
    onAddressSelect: (addressId: string) => void;
    onAddressEdit: (addressId: number) => void;
    onAddressDelete: (addressId: number) => void;
    showNewAddress: boolean;
    onToggleNewAddress: () => void;
    newAddressForm: NewAddressForm;
    onNewAddressChange: (field: string, value: string | boolean) => void;
    onSaveNewAddress: () => void;
    onCancelNewAddress: () => void;
}

export default function DeliveryAddress({
    savedAddresses,
    selectedAddress,
    onAddressSelect,
    onAddressEdit,
    onAddressDelete,
    showNewAddress,
    onToggleNewAddress,
    newAddressForm,
    onNewAddressChange,
    onSaveNewAddress,
    onCancelNewAddress,
}: DeliveryAddressProps) {
    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-gray-900">
                    <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-green-600" />
                        Địa chỉ giao hàng
                    </div>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={onToggleNewAddress}
                        className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                        <Plus className="h-4 w-4 mr-1" />
                        Thêm địa chỉ mới
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <RadioGroup value={selectedAddress} onValueChange={onAddressSelect}>
                    <div className="space-y-3">
                        {savedAddresses.map((address) => (
                            <AddressItem
                                key={address.id}
                                address={address}
                                isSelected={selectedAddress === address.id.toString()}
                                onSelect={onAddressSelect}
                                onEdit={onAddressEdit}
                                onDelete={onAddressDelete}
                                prefix="address"
                            />
                        ))}
                    </div>
                </RadioGroup>

                {showNewAddress && (
                    <AddressForm
                        formData={newAddressForm}
                        onFormChange={onNewAddressChange}
                        onSave={onSaveNewAddress}
                        onCancel={onCancelNewAddress}
                        isBilling={false}
                    />
                )}
            </CardContent>
        </Card>
    );
}
