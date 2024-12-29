import React, { useState } from 'react';
import { Menu, PieChart, Package, Users, ShoppingCart, Settings, LogOut, Plus, Edit, Trash, X } from 'lucide-react';

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
