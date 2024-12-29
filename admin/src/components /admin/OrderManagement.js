import React, { useState } from 'react';
import { Menu, PieChart, Package, Users, ShoppingCart, Settings, LogOut, Plus, Edit, Trash, X } from 'lucide-react';

// OrderManagement Component 
export function OrderManagement() {
  const [orders, setOrders] = useState([
    { 
      id: '#1234',
      customer: 'කමල් පෙරේරා',
      date: '2024-03-15',
      amount: 15000,
      status: 'pending',
      items: [
        { name: 'රෝස ක්‍රීම්', quantity: 2, price: 1500 },
        { name: 'ආයුර්වේද ක්‍රීම්', quantity: 1, price: 2000 }
      ]
    },
    { 
      id: '#1235',
      customer: 'සමන්ති සිල්වා',
      date: '2024-03-14',
      amount: 8500,
      status: 'processing',
      items: [
        { name: 'ආයුර්වේද ක්‍රීම්', quantity: 1, price: 2000 }
      ]
    }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">ඇණවුම් කළමනාකරණය</h2>
      
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">දින පරාසය</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
              <option>අද</option>
              <option>මෙම සතිය</option>
              <option>මෙම මාසය</option>
              <option>සියල්ල</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">තත්වය</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
              <option>සියල්ල</option>
              <option>අලුත්</option>
              <option>සැකසේ</option>
              <option>නිම කළ</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ඇණවුම් අංකය</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">පාරිභෝගිකයා</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">දිනය</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">මුදල</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">තත්වය</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">ක්‍රියා</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map(order => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">රු {order.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <OrderStatus status={order.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900">
                    විස්තර
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// OrderStatus Component
function OrderStatus({ status }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800"
  };

  const statusLabels = {
    pending: "අලුත්",
    processing: "සැකසේ",
    completed: "නිම කළ"
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
