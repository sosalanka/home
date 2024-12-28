import React from 'react';
import { useState } from 'react';
import { Menu, PieChart, Package, Users, ShoppingCart, Settings, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-pink-900 text-white transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">සෝස ලංකා</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <a href="#dashboard" className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mb-2">
            <PieChart className="h-5 w-5" />
            <span>ඩැෂ්බෝඩ්</span>
          </a>
          <a href="#products" className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mb-2">
            <Package className="h-5 w-5" />
            <span>නිෂ්පාදන</span>
          </a>
          <a href="#users" className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mb-2">
            <Users className="h-5 w-5" />
            <span>පරිශීලකයින්</span>
          </a>
          <a href="#orders" className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mb-2">
            <ShoppingCart className="h-5 w-5" />
            <span>ඇණවුම්</span>
          </a>
          <a href="#settings" className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mb-2">
            <Settings className="h-5 w-5" />
            <span>සැකසුම්</span>
          </a>
          <button className="flex items-center space-x-2 p-2 hover:bg-pink-800 rounded-lg mt-8 w-full">
            <LogOut className="h-5 w-5" />
            <span>ඉවත් වන්න</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`md:ml-64 min-h-screen ${sidebarOpen ? 'ml-64' : ''}`}>
        <header className="bg-white shadow-sm">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="md:hidden">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </header>

        <main className="py-6 px-4 sm:px-6 lg:px-8">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatCard title="මුළු ඇණවුම්" value="256" increase="+12%" />
            <StatCard title="මුළු ආදායම" value="රු 125,000" increase="+8%" />
            <StatCard title="නව පාරිභෝගිකයින්" value="64" increase="+24%" />
            <StatCard title="නිෂ්පාදන" value="48" increase="+6%" />
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">නවතම ඇණවුම්</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ඇණවුම් අංකය</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">පාරිභෝගිකයා</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">මුදල</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">තත්වය</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <OrderRow id="#1234" customer="කමල් පෙරේරා" amount="15,000" status="pending" />
                  <OrderRow id="#1235" customer="සමන්ති සිල්වා" amount="8,500" status="processing" />
                  <OrderRow id="#1236" customer="නිමල් ප්‍රනාන්දු" amount="12,000" status="completed" />
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatCard({ title, value, increase }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="flex items-baseline mt-4">
        <span className="text-2xl font-semibold">{value}</span>
        <span className="ml-2 text-green-500 text-sm">{increase}</span>
      </div>
    </div>
  );
}

function OrderRow({ id, customer, amount, status }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800"
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{id}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">රු {amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
