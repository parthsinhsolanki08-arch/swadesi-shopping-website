import React, { useEffect, useState } from 'react';
import { fetchAllOrders, acceptOrder } from '../../api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleAccept = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      const data = await acceptOrder(orderId, token);
      if (data.message) {
        toast.success(data.message);
        // Update local status so UI immediately reflects it
        setOrders((prev) => 
          prev.map((o) => o._id === orderId ? { ...o, status: 'Accepted' } : o)
        );
      }
    } catch (err) {
      toast.error(err.message || 'Failed to accept order');
    }
  };

  useEffect(() => {
    const userRole = JSON.parse(localStorage.getItem('user'))?.role;
    if (userRole !== 'admin') {
      toast.error('Unauthorized access');
      navigate('/');
      return;
    }

    const getOrders = async () => {
      try {
        const token = localStorage.getItem('token');
        const data = await fetchAllOrders(token);
        if (data.message) {
          toast.error(data.message);
        } else {
          setOrders(data);
        }
      } catch (err) {
        toast.error('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };
    getOrders();
  }, [navigate]);

  if (loading) return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 shadow-xl"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-5 py-12 min-h-[70vh]">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold mr-2 px-4 py-1 rounded-full">{orders.length} total orders</span>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 uppercase text-gray-600 text-sm leading-normal">
            <tr>
              <th className="py-4 px-6 text-left">Order Date</th>
              <th className="py-4 px-6 text-left">Customer</th>
              <th className="py-4 px-6 text-center">Items</th>
              <th className="py-4 px-6 text-center">Total Amount</th>
              <th className="py-4 px-6 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {orders.map((order) => (
              <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 text-left whitespace-nowrap">
                  <span className="font-medium text-gray-900">{new Date(order.createdAt).toLocaleDateString()}</span>
                  <div className="text-xs text-gray-400">{new Date(order.createdAt).toLocaleTimeString()}</div>
                </td>
                <td className="py-4 px-6 text-left">
                  <div className="font-semibold text-gray-800">{order.user?.name || 'Guest User'}</div>
                  <div className="text-xs text-gray-500">{order.user?.email || 'N/A'}</div>
                </td>
                <td className="py-4 px-6 text-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">{order.items?.length} items</span>
                </td>
                <td className="py-4 px-6 text-center font-bold text-gray-900">
                  ${order.totalAmount?.toFixed(2)}
                </td>
                <td className="py-4 px-6 text-center flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase
                    ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                    {order.status}
                  </span>
                  {order.status === 'Pending' && (
                    <button 
                      onClick={() => handleAccept(order._id)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs rounded shadow-sm transition-colors"
                    >
                      Accept
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="5" className="py-10 text-center text-lg text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
