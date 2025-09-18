export interface Product {
    id: number;
    name: string;
    description: string;
    price: number | string; // nếu bạn muốn giữ nguyên từ API (price là string), hoặc ép sang number nếu đã xử lý
    quantity: number;
    categoryId: number;
    image?: string;
    productSizes: any[]; // hoặc bạn có thể khai báo rõ hơn nếu biết structure
    status: 'active' | 'inactive'; // hoặc string nếu status có nhiều giá trị khác
    createdAt: string; // hoặc Date nếu đã parse
    updatedAt: string;
  }
  
  export interface OrderItem {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
    product: Product;
  }
  
  export interface User {
    id: number;
    email: string;
    fullName: string;
    address: string;
  }
  
  export interface Order {
    id: number;
    userId: number;
    status: string;
    createdAt: string;
    user: User;
    orderItems: OrderItem[];
  }
  export const mockOrders: Order[] = [
    {
      id: 1,
      userId: 101,
      status: "pending",
      createdAt: "2025-09-19T09:15:00.000Z",
      user: {
        id: 101,
        email: "user1@gmail.com",
        fullName: "Nguyen Van A",
        address: "HCM City",
      },
      orderItems: [
        {
          id: 1001,
          orderId: 1,
          productId: 201,
          quantity: 2,
          price: 250000,
          product: {
            id: 201,
            name: "Áo thun nam",
            description: "Áo thun cotton 100%",
            price: 125000,
            quantity: 100,
            categoryId: 10,
            image: "/uploads/shirt.png",
            productSizes: ["M", "L"],
            status: "active",
            createdAt: "2025-08-10T10:20:00.000Z",
            updatedAt: "2025-08-15T12:30:00.000Z",
          },
        },
      ],
    },
    {
      id: 2,
      userId: 102,
      status: "completed",
      createdAt: "2025-09-18T08:30:00.000Z",
      user: {
        id: 102,
        email: "user2@gmail.com",
        fullName: "Tran Thi B",
        address: "Ha Noi",
      },
      orderItems: [
        {
          id: 1002,
          orderId: 2,
          productId: 202,
          quantity: 1,
          price: 500000,
          product: {
            id: 202,
            name: "Giày sneaker",
            description: "Giày sneaker phong cách trẻ trung",
            price: 500000,
            quantity: 50,
            categoryId: 11,
            image: "/uploads/shoes.png",
            productSizes: ["40", "41", "42"],
            status: "active",
            createdAt: "2025-08-12T09:00:00.000Z",
            updatedAt: "2025-08-14T11:45:00.000Z",
          },
        },
      ],
    },
  ];