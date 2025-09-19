"use client"
import React, { useState, useMemo, useEffect } from 'react';
import { Order, OrderItem, User } from './components/DataOrder';
import OrderTable from './components/OrderTable';
import PaginationOrder from './components/PaginationOrder';
import DialogViewDetails from './components/Dialog/DialogOrderProduct';
import OrderActions from './components/OrderActions';
import { toast } from 'sonner';
// import { getAllOrders, deleteOrder } from '@/lib/apis/orderApi';

export default function OrderManager() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const fetchOrders = async () => {

    };

    useEffect(() => {
        fetchOrders();
    }, []);

    // Calculate total amount for an order
    const calculateTotalAmount = (orderItems: OrderItem[]) => {
        return orderItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    const filteredOrders = useMemo(() => {
        return orders.filter((order) => {
            const matchesSearch =
                order.id.toString().includes(searchTerm) ||
                order.user?.fullName?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'ALL' || order.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [orders, searchTerm, statusFilter]);

    const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage,
    );

    // Handlers
    const handleDelete = async (id: number) => {
        try {
            // await deleteOrder(id);
            setOrders(orders.filter((order) => order.id !== id));
            toast.success('Order deleted successfully');
        } catch (error) {
            toast.error('Failed to delete order');
            console.error('Error deleting order:', error);
        }
    };

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
    };

    const handleStatusChange = async (orderId: number, newStatus: string) => {
        try {
            // Update the order status in the local state
            setOrders(
                orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
            );
            // Refresh the orders data from the server
            await fetchOrders();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleRowsPerPageChange = (rows: number) => {
        setRowsPerPage(rows);
        setCurrentPage(1); // Reset to first page when changing rows per page
    };


    return (
        <div className='space-y-4 m-4'>
            <OrderActions
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                exportBill={() => { }}
            />
            <OrderTable
                paginatedpayments={paginatedOrders}
                calculateTotalAmount={calculateTotalAmount}
                handleViewDetails={handleViewDetails}
                handleDelete={handleDelete}
                onStatusChange={handleStatusChange}
            />
            <PaginationOrder
                currentPage={currentPage}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleRowsPerPageChange}
                totalItems={filteredOrders.length}
            />
            {selectedOrder && (
                <DialogViewDetails selectedOrderItems={selectedOrder.orderItems} setSelectedOrderItems={() => { }} />
            )}
        </div>
    );
}
