import { Address, DeliveryMethod, PaymentMethod as PaymentMethodType } from './types';

export const mockAddresses: Address[] = [
  {
    id: 1,
    label: 'Nhà riêng',
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    address: '123 Đường ABC, Phường XYZ',
    type: 'home',
    isDefault: true,
  },
  {
    id: 2,
    label: 'Văn phòng',
    name: 'Nguyễn Văn A',
    phone: '0123456789',
    address: '456 Đường DEF, Phường UVW',
    type: 'office',
    isDefault: false,
  },
];

export const mockBillingAddresses: Address[] = [
  {
    id: 1,
    label: 'Công ty ABC',
    name: 'Công ty TNHH ABC',
    address: '789 Đường GHI, Phường RST',
    type: 'office',
    isDefault: true,
    taxCode: '0123456789',
  },
];

export const deliveryMethods: DeliveryMethod[] = [
  {
    type: 'standard',
    label: 'Giao hàng tiêu chuẩn',
    description: 'Giao trong 2-3 ngày • Phí ship: 15.000đ',
    fee: 15000,
    icon: 'truck',
  },
  {
    type: 'express',
    label: 'Giao hàng nhanh',
    description: 'Giao trong 24h • Phí ship: 25.000đ',
    fee: 25000,
    icon: 'express',
  },
];

export const paymentMethods: PaymentMethodType[] = [
  {
    type: 'cod',
    label: 'Thanh toán tiền mặt (COD)',
    description: 'Thanh toán bằng tiền mặt khi nhận hàng',
    icon: 'wallet',
    iconColor: 'green',
    category: 'offline',
  },
  {
    type: 'card',
    label: 'Thẻ tín dụng/ghi nợ',
    description: 'Visa, Mastercard, JCB, American Express',
    icon: 'credit-card',
    iconColor: 'blue',
    category: 'online',
  },
  {
    type: 'momo',
    label: 'Ví MoMo',
    description: 'Thanh toán qua ví điện tử MoMo',
    icon: 'momo',
    iconColor: 'pink',
    category: 'online',
  },
  {
    type: 'zalopay',
    label: 'ZaloPay',
    description: 'Thanh toán qua ví điện tử ZaloPay',
    icon: 'zalopay',
    iconColor: 'blue',
    category: 'online',
  },
  {
    type: 'vnpay',
    label: 'VNPay',
    description: 'Chuyển khoản qua cổng VNPay',
    icon: 'vnpay',
    iconColor: 'green',
    category: 'online',
  },
  {
    type: 'banking',
    label: 'Internet Banking',
    description: 'Chuyển khoản qua ngân hàng trực tuyến',
    icon: 'banking',
    iconColor: 'green',
    category: 'online',
  },
];
