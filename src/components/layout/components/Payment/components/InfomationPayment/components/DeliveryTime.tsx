import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Clock, Truck } from 'lucide-react';
import { DeliveryMethod } from '../types';

interface DeliveryTimeProps {
    deliveryMethod: string;
    onDeliveryMethodChange: (method: string) => void;
    deliveryMethods: DeliveryMethod[];
}

export default function DeliveryTime({
    deliveryMethod,
    onDeliveryMethodChange,
    deliveryMethods
}: DeliveryTimeProps) {
    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-gray-900">
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    Thời gian giao hàng
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup value={deliveryMethod} onValueChange={onDeliveryMethodChange}>
                    <div className="space-y-3">
                        {deliveryMethods.map((method) => (
                            <div
                                key={method.type}
                                className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-green-50 transition-colors"
                            >
                                <RadioGroupItem
                                    value={method.type}
                                    id={method.type}
                                    className="text-green-600"
                                />
                                <div className="flex-1">
                                    <Label htmlFor={method.type} className="font-medium text-gray-900 cursor-pointer">
                                        {method.label}
                                    </Label>
                                    <p className="text-sm text-gray-600">{method.description}</p>
                                </div>
                                {method.type === 'express' ? (
                                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                                        Nhanh
                                    </Badge>
                                ) : (
                                    <Truck className="h-5 w-5 text-gray-400" />
                                )}
                            </div>
                        ))}
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
