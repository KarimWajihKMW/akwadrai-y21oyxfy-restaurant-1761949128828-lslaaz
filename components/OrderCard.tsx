import React from 'react';
import { ClockIcon, UserIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone?: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  orderTime: Date;
  estimatedDelivery?: Date;
  orderType: 'dine-in' | 'takeout' | 'delivery';
  tableNumber?: number;
  address?: string;
}

interface OrderCardProps {
  order: Order;
  onStatusChange?: (orderId: string, newStatus: Order['status']) => void;
  onViewDetails?: (orderId: string) => void;
  className?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ 
  order, 
  onStatusChange, 
  onViewDetails,
  className = '' 
}) => {
  const getStatusColor = (status: Order['status']) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      preparing: 'bg-blue-100 text-blue-800 border-blue-200',
      ready: 'bg-green-100 text-green-800 border-green-200',
      delivered: 'bg-gray-100 text-gray-800 border-gray-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    return colors[status];
  };

  const getOrderTypeIcon = (type: Order['orderType']) => {
    const icons = {
      'dine-in': '🍽️',
      'takeout': '🥡',
      'delivery': '🚚',
    };
    return icons[type];
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  const handleStatusChange = (newStatus: Order['status']) => {
    onStatusChange?.(order.id, newStatus);
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 ${className}`}
      role="article"
      aria-labelledby={`order-${order.id}-title`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 
            id={`order-${order.id}-title`}
            className="text-lg font-semibold text-gray-900 mb-1"
          >
            Order #{order.id}
          </h3>
          <div className="flex items-center text-sm text-gray-600 space-x-4">
            <span className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              {order.customerName}
            </span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" aria-hidden="true" />
              {formatTime(order.orderTime)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-lg" aria-label={`Order type: ${order.orderType}`}>
            {getOrderTypeIcon(order.orderType)}
          </span>
          <span 
            className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}
            aria-label={`Order status: ${order.status}`}
          >
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Order Details */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">
          {order.items.length} item{order.items.length !== 1 ? 's' : ''}
        </div>
        <div className="space-y-1">
          {order.items.slice(0, 3).map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-gray-700">
                {item.quantity}x {item.name}
              </span>
              <span className="text-gray-900 font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
          {order.items.length > 3 && (
            <div className="text-sm text-gray-500 italic">
              +{order.items.length - 3} more items
            </div>
          )}
        </div>
      </div>

      {/* Additional Info */}
      {order.tableNumber && (
        <div className="text-sm text-gray-600 mb-2">
          Table: {order.tableNumber}
        </div>
      )}

      {order.address && (
        <div className="text-sm text-gray-600 mb-4 truncate" title={order.address}>
          📍 {order.address}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center text-lg font-bold text-gray-900">
          <CurrencyDollarIcon className="h-5 w-5 mr-1" aria-hidden="true" />
          {order.totalAmount.toFixed(2)}
        </div>
        
        <div className="flex space-x-2">
          {order.status !== 'delivered' && order.status !== 'cancelled' && (
            <select
              value={order.status}
              onChange={(e) => handleStatusChange(e.target.value as Order['status'])}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              aria-label={`Change status for order ${order.id}`}
            >
              <option value="pending">Pending</option>
              <option value="preparing">Preparing</option>
              <option value="ready">Ready</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          )}
          
          <button
            onClick={() => onViewDetails?.(order.id)}
            className="px-4 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
            aria-label={`View details for order ${order.id}`}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;