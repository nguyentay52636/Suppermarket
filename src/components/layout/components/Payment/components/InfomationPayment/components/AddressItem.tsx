import React from 'react';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, Building, MapPin, Edit3, Trash2 } from 'lucide-react';
import { Address } from '../types';

interface AddressItemProps {
    address: Address;
    isSelected: boolean;
    onSelect: (addressId: string) => void;
    onEdit: (addressId: number) => void;
    onDelete: (addressId: number) => void;
    prefix: string;
}

export default function AddressItem({
    address,
    isSelected,
    onSelect,
    onEdit,
    onDelete,
    prefix
}: AddressItemProps) {
    const getAddressIcon = () => {
        switch (address.type) {
            case 'home':
                return <Home className="h-4 w-4 text-gray-500" />;
            case 'office':
                return <Building className="h-4 w-4 text-gray-500" />;
            default:
                return <MapPin className="h-4 w-4 text-gray-500" />;
        }
    };

    return (
        <div
            className={`flex items-start space-x-3 p-4 border-2 rounded-lg transition-all ${isSelected
                ? "border-green-500 bg-green-50"
                : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                }`}
        >
            <RadioGroupItem
                value={address.id.toString()}
                id={`${prefix}-${address.id}`}
                className="text-green-600 mt-1"
            />
            <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        {getAddressIcon()}
                        <Label
                            htmlFor={`${prefix}-${address.id}`}
                            className="font-medium text-gray-900 cursor-pointer"
                        >
                            {address.label}
                        </Label>
                        {address.isDefault && (
                            <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                Mặc định
                            </Badge>
                        )}
                    </div>
                    <div className="flex items-center space-x-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onEdit(address.id)}
                            className="h-8 w-8 p-0 text-gray-400 hover:text-green-600"
                        >
                            <Edit3 className="h-3 w-3" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onDelete(address.id)}
                            className="h-8 w-8 p-0 text-gray-400 hover:text-red-600"
                        >
                            <Trash2 className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                    {address.name} • {address.phone}
                </p>
                <p className="text-sm text-gray-600">{address.address}</p>
                {address.taxCode && (
                    <p className="text-sm text-gray-500 mt-1">MST: {address.taxCode}</p>
                )}
            </div>
        </div>
    );
}
