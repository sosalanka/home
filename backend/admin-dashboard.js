import React, { useState } from 'react';
import { Menu, PieChart, Package, Users, ShoppingCart, Settings, LogOut, Plus, Edit, Trash, X } from 'lucide-react';

// AdminDashboard Component
export function AdminDashboard() {
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
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}

// DashboardContent Component
function DashboardContent() {
  return (
    <>
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
    </>
  );
}

// StatCard Component
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

// OrderRow Component
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

// ProductManagement Component
export function ProductManagement() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'රෝස ක්‍රීම්', price: 1500, stock: 50, category: 'ක්‍රීම්' },
    { id: 2, name: 'ආයුර්වේද ක්‍රීම්', price: 2000, stock: 30, category: 'ක්‍රීම්' }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">නිෂ්පාදන කළමනාකරණය</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-pink-700"
        >
          <Plus className="h-5 w-5" />
          <span>නව නිෂ්පාදනය</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">නිෂ්පාදනය</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">මිල</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">තොග</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">වර්ගය</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">ක්‍රියා</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">රු {product.price.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{product.stock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">නව නිෂ්පාදනය එක් කරන්න</h3>
              <button onClick={() => setShowAddModal(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">නිෂ්පාදන නම</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">මිල</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">තොග ප්‍රමාණය</label>
                <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">වර්ගය</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
                  <option>ක්‍රීම්</option>
                  <option>ආයුර්වේද</option>
                  <option>සුවඳ විලවුන්</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">රූපය</label>
                <input type="file" className="mt-1 block w-full" />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                >
                  අවලංගු
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700"
                >
                  තහවුරු කරන්න
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
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

// UserManagement Component
export function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'කමල් පෙරේරා',
      email: 'kamal@example.com',
      role: 'customer',
      status: 'active',
      joinDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'සමන්ති සිල්වා',
      email: 'samanthi@example.com',
      role: 'admin',
      status: 'active',
      joinDate: '2024-02-20'
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">පරිශීලක කළමනාකරණය</h2>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-pink-700">
          <Plus className="h-5 w-5" />
          <span>නව පරිශීලක</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">නම</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ඊමේල්</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">භූමිකාව</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">තත්වය</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">එක්වූ දිනය</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">ක්‍රියා</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                    {user.role === 'admin' ? 'පරිපාලක' : 'පාරිභෝගික'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {user.status === 'active' ? 'සක්‍රිය' : 'අක්‍රිය'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.joinDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <Trash className="h-5 w-5" />
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

// Settings Component
export function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">සැකසුම්</h2>
      
      <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {/* Profile Settings */}
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">පැතිකඩ සැකසුම්</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">නම</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ඊමේල්</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">පැතිකඩ රූපය</label>
              <input type="file" className="mt-1 block w-full" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                සුරකින්න
              </button>
            </div>
          </form>
        </div>

        {/* Password Change */}
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">මුරපදය වෙනස් කිරීම</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">වර්තමාන මුරපදය</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">නව මුරපදය</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">නව මුරපදය තහවුරු කරන්න</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                යාවත්කාලීන කරන්න
              </button>
            </div>
          </form>
        </div>

        {/* Notification Settings */}
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">දැනුම්දීම් සැකසුම්</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">ඊමේල් දැනුම්දීම්</h4>
                <p className="text-sm text-gray-500">නව ඇණවුම් සහ යාවත්කාලීන කිරීම් සඳහා ඊමේල් දැනුම්දීම් ලබා ගන්න</p>
              </div>
              <button className="bg
