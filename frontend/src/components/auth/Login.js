// frontend/src/components/auth/Login.js
import React, { useState } from 'react';

export function Login() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/auth/${isAdmin ? 'admin' : 'user'}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                window.location.href = isAdmin ? '/admin/dashboard' : '/profile';
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-pink-900 mb-6">
                    {isAdmin ? 'Admin පිවිසුම' : 'පරිශීලක පිවිසුම'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">ඊමේල්</label>
                        <input 
                            type="email" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">මුරපදය</label>
                        <input 
                            type="password" 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            required
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="adminCheck"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                        />
                        <label htmlFor="adminCheck" className="ml-2 block text-sm text-gray-900">
                            Admin පිවිසුම
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                        පිවිසෙන්න
                    </button>
                    <div className="text-sm text-center">
                        <a href="/register" className="text-pink-600 hover:text-pink-500">
                            ලියාපදිංචි වන්න
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
