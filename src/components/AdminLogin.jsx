  import React, { useState } from 'react';

  /*  */export default function AdminLogin() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setMessage('');

      try {
        const res = await fetch('http://localhost:3001/admin-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
          setIsSuccess(true);
          setMessage('✅ Login successful! Redirecting...');
          localStorage.setItem("isAdmin", "true");
          // You can redirect to admin dashboard here if needed
        } else {
          setIsSuccess(false);
          setMessage(`❌ ${data.message}`);
        }
      } catch (error) {
        setIsSuccess(false);
        setMessage('❌ Failed to connect to server.');
        console.error('Login error:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded font-semibold transition duration-200"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {message && (
            <div className={`mt-4 text-sm text-center ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    );
  }
