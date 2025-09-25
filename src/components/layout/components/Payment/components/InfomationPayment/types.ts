export interface Address {
  id: number;
  label: string;
  name: string;
  phone: string;
  address: string;
  type: 'home' | 'office' | 'other';
  isDefault: boolean;
  taxCode?: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
}

export interface DeliveryMethod {
  type: 'standard' | 'express';
  label: string;
  description: string;
  fee: number;
  icon: string;
}
export interface PaymentMethod {
  type: string;
  label: string;
  description: string;
  category: 'offline' | 'online';
  accountInfo?: {
    bankId: string;
    bankAccount: string;
    phoneNumber?: string; // For MoMo (last 3 digits)
  };
  vnpayInfo?: {
    merchantId: string;
    merchantName: string;
    store: string;
    terminal: string;
  };
  logoUrl?: string;
}

export interface NewAddressForm {
  name: string;
  phone: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  isDefault: boolean;
}

export interface NewBillingAddressForm {
  name: string;
  address: string;
  ward: string;
  district: string;
  city: string;
  taxCode: string;
}

