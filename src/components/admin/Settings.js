

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
              <button className="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">දුරකථන දැනුම්දීම්</h4>
                <p className="text-sm text-gray-500">හදිසි දැනුම්දීම් සඳහා කෙටි පණිවිඩ ලබා ගන්න</p>
              </div>
              <button className="bg-pink-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
              </button>
            </div>
          </div>
        </div>

        {/* System Settings */}
        <div className="p-6">
          <h3 className="text-lg font-medium mb-4">පද්ධති සැකසුම්</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">භාෂාව</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
                <option>සිංහල</option>
                <option>English</option>
                <option>தமிழ்</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">කාල කලාපය</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500">
                <option>ආසියා/කොළඹ</option>
                <option>ආසියා/සිංගප්පූරුව</option>
                <option>GMT</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
                සුරකින්න
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Main Content Area */}
        <div className="flex-1">
          {/* You can implement React Router here to switch between components */}
          <AdminDashboard />
          {/* 
          Use these components with React Router:
          <ProductManagement />
          <OrderManagement />
          <UserManagement />
          <Settings />
          */}
        </div>
      </div>
    </div>
  );
}

// Add this to integrate React Router
/*
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <div className="flex">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/products" element={<ProductManagement />} />
              <Route path="/orders" element={<OrderManagement />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
*/
