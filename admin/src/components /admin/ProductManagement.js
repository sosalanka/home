import React, { useState } from 'react';
import { Plus, Edit, Trash, X } from 'lucide-react';

export default function ProductManagement() {
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
