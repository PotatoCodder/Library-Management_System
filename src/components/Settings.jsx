import React, { useState } from 'react';

export default function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('dark');

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 ml-64 pt-24">
      <h1 className="text-3xl font-bold text-teal-400 mb-8">⚙️ Settings</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 max-w-xl mx-auto space-y-6">
        {/* Username */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-300">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Theme Toggle */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-gray-300">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-3 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
