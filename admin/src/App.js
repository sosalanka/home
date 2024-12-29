import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login, Register } from './components/auth';
import { AdminDashboard, ProductManagement, OrderManagement, UserManagement, Settings } from './components/admin';

// Auth protection HOC
const ProtectedRoute = ({ children, isAdmin }) => {
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (isAdmin && userRole !== 'admin') {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected admin routes */}
        <Route path="/admin/*" element={
          <ProtectedRoute isAdmin={true}>
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </ProtectedRoute>
        } />
        
        {/* Protected user routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            {/* Add user dashboard component here */}
          </ProtectedRoute>
        } />
        
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
