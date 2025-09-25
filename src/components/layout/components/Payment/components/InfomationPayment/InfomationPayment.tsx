import React, { useState } from 'react';
import { CustomerInfo, NewAddressForm, NewBillingAddressForm } from './types';
import { mockAddresses, mockBillingAddresses, deliveryMethods, paymentMethods } from './constants';
import {
    CustomerInformation,
    DeliveryAddress,
    BillingAddress,
    DeliveryTime,
    PaymentMethod
} from './components';

export default function InfomationPayment() {
    // Customer Information State
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        fullName: '',
        phone: '',
        email: '',
    });

    // Delivery Address State
    const [savedAddresses, setSavedAddresses] = useState(mockAddresses);
    const [selectedAddress, setSelectedAddress] = useState('1');
    const [showNewAddress, setShowNewAddress] = useState(false);
    const [newAddressForm, setNewAddressForm] = useState<NewAddressForm>({
        name: '',
        phone: '',
        address: '',
        ward: '',
        district: '',
        city: '',
        isDefault: false,
    });

    // Billing Address State
    const [savedBillingAddresses, setSavedBillingAddresses] = useState(mockBillingAddresses);
    const [selectedBillingAddress, setSelectedBillingAddress] = useState('1');
    const [sameAsBilling, setSameAsBilling] = useState(true);
    const [showNewBillingAddress, setShowNewBillingAddress] = useState(false);
    const [newBillingAddressForm, setNewBillingAddressForm] = useState<NewBillingAddressForm>({
        name: '',
        address: '',
        ward: '',
        district: '',
        city: '',
        taxCode: '',
    });

    // Delivery and Payment State
    const [deliveryMethod, setDeliveryMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('cod');

    // Event Handlers
    const handleCustomerInfoChange = (field: keyof CustomerInfo, value: string) => {
        setCustomerInfo(prev => ({ ...prev, [field]: value }));
    };

    const handleAddressEdit = (addressId: number) => {
        console.log('Edit address:', addressId);
    };

    const handleAddressDelete = (addressId: number) => {
        setSavedAddresses(prev => prev.filter(addr => addr.id !== addressId));
    };

    const handleNewAddressChange = (field: string, value: string | boolean) => {
        setNewAddressForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveNewAddress = () => {
        const newAddress = {
            id: Math.max(...savedAddresses.map(a => a.id)) + 1,
            label: newAddressForm.isDefault ? 'Địa chỉ mặc định' : 'Địa chỉ mới',
            name: newAddressForm.name,
            phone: newAddressForm.phone,
            address: `${newAddressForm.address}, ${newAddressForm.ward}, ${newAddressForm.district}, ${newAddressForm.city}`,
            type: 'other' as const,
            isDefault: newAddressForm.isDefault,
        };
        setSavedAddresses(prev => [...prev, newAddress]);
        setNewAddressForm({
            name: '',
            phone: '',
            address: '',
            ward: '',
            district: '',
            city: '',
            isDefault: false,
        });
        setShowNewAddress(false);
    };

    const handleBillingAddressEdit = (addressId: number) => {
        console.log('Edit billing address:', addressId);
    };

    const handleBillingAddressDelete = (addressId: number) => {
        setSavedBillingAddresses(prev => prev.filter(addr => addr.id !== addressId));
    };

    const handleNewBillingAddressChange = (field: string, value: string | boolean) => {
        setNewBillingAddressForm(prev => ({ ...prev, [field]: value }));
    };

    const handleSaveNewBillingAddress = () => {
        const newBillingAddress = {
            id: Math.max(...savedBillingAddresses.map(a => a.id)) + 1,
            label: 'Địa chỉ thanh toán mới',
            name: newBillingAddressForm.name,
            phone: '',
            address: `${newBillingAddressForm.address}, ${newBillingAddressForm.ward}, ${newBillingAddressForm.district}, ${newBillingAddressForm.city}`,
            type: 'office' as const,
            isDefault: false,
            taxCode: newBillingAddressForm.taxCode,
        };
        setSavedBillingAddresses(prev => [...prev, newBillingAddress]);
        setNewBillingAddressForm({
            name: '',
            address: '',
            ward: '',
            district: '',
            city: '',
            taxCode: '',
        });
        setShowNewBillingAddress(false);
    };

    return (
        <div className="lg:col-span-2 space-y-6">
            <CustomerInformation
                customerInfo={customerInfo}
                onCustomerInfoChange={handleCustomerInfoChange}
            />

            <DeliveryAddress
                savedAddresses={savedAddresses}
                selectedAddress={selectedAddress}
                onAddressSelect={setSelectedAddress}
                onAddressEdit={handleAddressEdit}
                onAddressDelete={handleAddressDelete}
                showNewAddress={showNewAddress}
                onToggleNewAddress={() => setShowNewAddress(!showNewAddress)}
                newAddressForm={newAddressForm}
                onNewAddressChange={handleNewAddressChange}
                onSaveNewAddress={handleSaveNewAddress}
                onCancelNewAddress={() => setShowNewAddress(false)}
            />

            <BillingAddress
                savedBillingAddresses={savedBillingAddresses}
                selectedBillingAddress={selectedBillingAddress}
                onBillingAddressSelect={setSelectedBillingAddress}
                onBillingAddressEdit={handleBillingAddressEdit}
                onBillingAddressDelete={handleBillingAddressDelete}
                sameAsBilling={sameAsBilling}
                onSameAsBillingChange={setSameAsBilling}
                showNewBillingAddress={showNewBillingAddress}
                onToggleNewBillingAddress={() => setShowNewBillingAddress(!showNewBillingAddress)}
                newBillingAddressForm={newBillingAddressForm}
                onNewBillingAddressChange={handleNewBillingAddressChange}
                onSaveNewBillingAddress={handleSaveNewBillingAddress}
                onCancelNewBillingAddress={() => setShowNewBillingAddress(false)}
            />

            <DeliveryTime
                deliveryMethod={deliveryMethod}
                onDeliveryMethodChange={setDeliveryMethod}
                deliveryMethods={deliveryMethods}
            />

            <PaymentMethod
                paymentMethod={paymentMethod}
                onPaymentMethodChange={setPaymentMethod}
                paymentMethods={paymentMethods}
            />
        </div>
    );
}
