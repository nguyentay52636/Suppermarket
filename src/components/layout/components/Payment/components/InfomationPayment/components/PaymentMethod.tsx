import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet, Globe } from 'lucide-react';
import { PaymentMethod as PaymentMethodType } from '../types';

interface PaymentMethodProps {
    paymentMethod: string;
    onPaymentMethodChange: (method: string) => void;
    paymentMethods: PaymentMethodType[];
}

export default function PaymentMethod({
    paymentMethod,
    onPaymentMethodChange,
    paymentMethods
}: PaymentMethodProps) {
    const offlineMethods = paymentMethods.filter(method => method.category === 'offline');
    const onlineMethods = paymentMethods.filter(method => method.category === 'online');

    const getPaymentIcon = (method: PaymentMethodType) => {
        if (method.type === 'card') {
            return <CreditCard className="h-5 w-5 text-blue-600" />;
        }
        if (method.type === 'cod') {
            return <Wallet className="h-5 w-5 text-green-600" />;
        }
        // For other methods, return the icon from the method data
        return null;
    };

    const getPaymentIconBg = (method: PaymentMethodType) => {
        switch (method.type) {
            case 'card':
                return 'bg-blue-100';
            case 'momo':
                return 'bg-pink-500';
            case 'zalopay':
                return 'bg-blue-500';
            case 'vnpay':
                return 'bg-green-500';
            case 'banking':
                return 'bg-green-100';
            case 'cod':
                return 'bg-green-100';
            default:
                return 'bg-gray-100';
        }
    };

    const getPaymentIconText = (method: PaymentMethodType) => {
        switch (method.type) {
            case 'momo':
                return 'M';
            case 'zalopay':
                return 'Z';
            case 'vnpay':
                return '₫';
            case 'banking':
                return 'B';
            default:
                return '';
        }
    };

    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-gray-900">
                    <CreditCard className="h-5 w-5 mr-2 text-green-600" />
                    Phương thức thanh toán
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={onPaymentMethodChange}>
                    <div className="space-y-4">
                        {/* Offline Payment Methods */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 flex items-center border-b pb-2">
                                <Wallet className="h-4 w-4 mr-2 text-green-600" />
                                Thanh toán khi nhận hàng
                            </h4>
                            {offlineMethods.map((method) => (
                                <div
                                    key={method.type}
                                    className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === method.type
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                        }`}
                                >
                                    <RadioGroupItem value={method.type} id={method.type} className="text-green-600" />
                                    <div className="flex-1">
                                        <Label htmlFor={method.type} className="font-medium text-gray-900 cursor-pointer">
                                            {method.label}
                                        </Label>
                                        <p className="text-sm text-gray-600">{method.description}</p>
                                    </div>
                                    <div className={`w-10 h-10 ${getPaymentIconBg(method)} rounded-full flex items-center justify-center`}>
                                        {getPaymentIcon(method) || (
                                            <span className="text-white text-sm font-bold">
                                                {getPaymentIconText(method)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Separator />

                        {/* Online Payment Methods */}
                        <div className="space-y-3">
                            <h4 className="font-medium text-gray-900 flex items-center border-b pb-2">
                                <Globe className="h-4 w-4 mr-2 text-green-600" />
                                Thanh toán trực tuyến
                            </h4>
                            {onlineMethods.map((method) => (
                                <div
                                    key={method.type}
                                    className={`flex items-center space-x-3 p-4 border-2 rounded-lg transition-all ${paymentMethod === method.type
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-200 hover:border-green-300 hover:bg-green-50/50"
                                        }`}
                                >
                                    <RadioGroupItem value={method.type} id={method.type} className="text-green-600" />
                                    <div className="flex-1">
                                        <Label htmlFor={method.type} className="font-medium text-gray-900 cursor-pointer">
                                            {method.label}
                                        </Label>
                                        <p className="text-sm text-gray-600">{method.description}</p>
                                    </div>
                                    <div className={`w-10 h-10 ${getPaymentIconBg(method)} rounded-full flex items-center justify-center`}>
                                        {getPaymentIcon(method) || (
                                            <span className="text-white text-sm font-bold">
                                                {getPaymentIconText(method)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
