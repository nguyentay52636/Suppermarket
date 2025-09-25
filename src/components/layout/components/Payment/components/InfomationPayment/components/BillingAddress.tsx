import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CreditCard, Plus } from 'lucide-react';
import { Address, NewBillingAddressForm } from '../types';
import AddressItem from './AddressItem';
import AddressForm from './AddressForm';

interface BillingAddressProps {
    savedBillingAddresses: Address[];
    selectedBillingAddress: string;
    onBillingAddressSelect: (addressId: string) => void;
    onBillingAddressEdit: (addressId: number) => void;
    onBillingAddressDelete: (addressId: number) => void;
    sameAsBilling: boolean;
    onSameAsBillingChange: (checked: boolean) => void;
    showNewBillingAddress: boolean;
    onToggleNewBillingAddress: () => void;
    newBillingAddressForm: NewBillingAddressForm;
    onNewBillingAddressChange: (field: string, value: string | boolean) => void;
    onSaveNewBillingAddress: () => void;
    onCancelNewBillingAddress: () => void;
}

export default function BillingAddress({
    savedBillingAddresses,
    selectedBillingAddress,
    onBillingAddressSelect,
    onBillingAddressEdit,
    onBillingAddressDelete,
    sameAsBilling,
    onSameAsBillingChange,
    showNewBillingAddress,
    onToggleNewBillingAddress,
    newBillingAddressForm,
    onNewBillingAddressChange,
    onSaveNewBillingAddress,
    onCancelNewBillingAddress,
}: BillingAddressProps) {
    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-gray-900">
                    <div className="flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                        Địa chỉ thanh toán
                    </div>
                    {!sameAsBilling && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onToggleNewBillingAddress}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                        >
                            <Plus className="h-4 w-4 mr-1" />
                            Thêm địa chỉ thanh toán
                        </Button>
                    )}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="sameAsBilling"
                        checked={sameAsBilling}
                        onCheckedChange={(checked) => onSameAsBillingChange(checked === true)}
                        className="text-green-600"
                    />
                    <Label htmlFor="sameAsBilling" className="text-gray-700 cursor-pointer">
                        Địa chỉ thanh toán giống địa chỉ giao hàng
                    </Label>
                </div>

                {!sameAsBilling && (
                    <div className="space-y-4">
                        <RadioGroup value={selectedBillingAddress} onValueChange={onBillingAddressSelect}>
                            <div className="space-y-3">
                                {savedBillingAddresses.map((address) => (
                                    <AddressItem
                                        key={address.id}
                                        address={address}
                                        isSelected={selectedBillingAddress === address.id.toString()}
                                        onSelect={onBillingAddressSelect}
                                        onEdit={onBillingAddressEdit}
                                        onDelete={onBillingAddressDelete}
                                        prefix="billing"
                                    />
                                ))}
                            </div>
                        </RadioGroup>

                        {showNewBillingAddress && (
                            <AddressForm
                                formData={newBillingAddressForm}
                                onFormChange={onNewBillingAddressChange}
                                onSave={onSaveNewBillingAddress}
                                onCancel={onCancelNewBillingAddress}
                                isBilling={true}
                            />
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
