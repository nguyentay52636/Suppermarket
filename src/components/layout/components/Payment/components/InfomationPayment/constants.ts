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
    category: 'offline',
  },
  {
    type: 'card',
    label: 'Thẻ tín dụng/ghi nợ',
    description: 'Visa, Mastercard, JCB, American Express',
    category: 'online',
  },
  {
    type: 'momo',
    label: 'Ví MoMo',
    description: 'Thanh toán qua ví điện tử MoMo',
    category: 'online',
    accountInfo: {
      bankId: '970415', // MoMo bank code
      bankAccount: '0123456789',
      phoneNumber: '0123456789',
    },
    logoUrl: 'https://img.vietqr.io/image/970415-0123456789-compact.png',
  },
  {
    type: 'zalopay',
    label: 'ZaloPay',
    description: 'Thanh toán qua ví điện tử ZaloPay',
    category: 'online',
    accountInfo: {
      bankId: '970458', // ZaloPay bank code
      bankAccount: '0987654321',
    },
    logoUrl: 'https://img.vietqr.io/image/970458-0987654321-compact.png',
  },
  {
    type: 'vnpay',
    label: 'VNPay',
    description: 'Chuyển khoản qua cổng VNPay',
    category: 'online',
    vnpayInfo: {
      merchantId: '12345678',
      merchantName: 'Siêu thị ABC',
      store: 'Store 001',
      terminal: 'Terminal 001',
    },
    logoUrl: 'https://img.vietqr.io/image/970436-1234567890-compact.png',
  },
  {
    type: 'banking',
    label: 'Internet Banking',
    description: 'Chuyển khoản qua ngân hàng trực tuyến',
    category: 'online',
    accountInfo: {
      bankId: '970436', // Vietcombank
      bankAccount: '1234567890',
    },
    logoUrl: 'https://img.vietqr.io/image/970436-1234567890-compact.png',
  },
];
