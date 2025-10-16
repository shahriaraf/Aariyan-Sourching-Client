// FILE: OrdersContent.jsx

"use client";
import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';


const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const OrderItem = ({ order }) => {
  const status = order.status || 'Pending';
  const isDelivered = status === 'Delivered';
  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL || '';

  const formattedDate = new Date(order.deliveryTime).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="border border-gray-200 p-4 flex flex-col sm:flex-row sm:items-center sm:h-auto justify-between gap-6">
      <div className="flex items-center gap-6 flex-1">
        <div className="w-20 h-24 bg-gray-200 flex-shrink-0">
          {order.primaryImage ? (
            <img 
              src={`${order.primaryImage}`}
              alt={order.styleNumber} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">No Image</div>
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{order.styleNumber}</p>
          <p className="text-sm text-gray-500">Company: {order.company || 'N/A'}</p>
        </div>
      </div>
      <div className="w-full sm:w-64">
        <div className="flex items-center mb-1">
          <span className={`w-2.5 h-2.5 rounded-full mr-2 ${isDelivered ? 'bg-green-500' : status === 'Canceled' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
          <p className="text-sm text-gray-800">{status}</p>
        </div>
        <p className="text-xs text-gray-500 mb-2 pl-[18px]">Expected by {formattedDate}</p>
        {isDelivered && (
          <button className="flex items-center text-sm text-yellow-600 font-semibold pl-[18px]">
            <StarIcon />
            Rate & Review Product
          </button>
        )}
      </div>
    </div>
  );
};

export default function OrdersContent() {
  const { user, loading: authLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // --- NEW STATE FOR PAGINATION ---
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (authLoading) return;
    
    if (user && user.email) {
      const fetchOrders = async () => {
        setIsLoading(true);
        setError(null);
        try {
          // --- UPDATED URL with page and limit parameters ---
          const limit = 3;
          const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/order?email=${encodeURIComponent(user.email)}&page=${currentPage}&limit=${limit}`;
          
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error('Failed to fetch your orders.');
          }
          const data = await res.json();
          setOrders(data.orders); // The backend now sends an object with an 'orders' array
          setTotalPages(data.totalPages); // Set total pages from the backend response
        } catch (err) {
          setError(err.message);
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchOrders();
    } else {
      setIsLoading(false);
      setOrders([]);
      setTotalPages(0);
    }
    // --- NEW: Re-run this effect when the currentPage changes ---
  }, [user, authLoading, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (authLoading) {
    return <p className="text-gray-500 text-center py-10">Authenticating...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Orders
      </h1>
      <div className="space-y-4">
        {isLoading && <p className="text-gray-500">Loading your order history...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!isLoading && !error && orders.length === 0 && (
          <div className="text-center py-10 border border-dashed rounded-lg">
             <p className="text-gray-600">You haven't placed any orders yet.</p>
             <p className="text-sm text-gray-400 mt-2">Your past orders will appear here.</p>
          </div>
        )}

        {!isLoading && !error && orders.length > 0 && (
          orders.map(order => (
            <OrderItem key={order._id} order={order} />
          ))
        )}
      </div>

      {/* --- NEW PAGINATION CONTROLS --- */}
      {!isLoading && totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}