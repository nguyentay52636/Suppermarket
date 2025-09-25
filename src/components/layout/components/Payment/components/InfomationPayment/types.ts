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
  type: 'cod' | 'card' | 'momo' | 'zalopay' | 'vnpay' | 'banking';
  label: string;
  description: string;
  icon: string;
  iconColor: string;
  category: 'offline' | 'online';
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
