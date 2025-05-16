import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Book, PlusCircle, Search, Settings, User, LogOut } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdmin');
    setIsAdmin(adminStatus === 'true');
  }, []);

  // ✅ THIS is what was missing
  const handleLogout = () => {
    localStorage.setItem("isAdmin", "false");
    setIsAdmin(false);
    navigate('/login');
  };

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Sidebar Header */}
      <div className="mt-16 flex items-center justify-between p-6 bg-gray-800 border-b border-gray-700">
        <div className="text-3xl font-semibold text-teal-400 tracking-wide">
          Menu
        </div>
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-6 px-4 space-y-3">
        <ul>
        {isAdmin && (
          <li>
            <Link
              to="/add-book"
              className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200"
            >
              <PlusCircle className="text-xl text-teal-400" />
              <span>Add Books</span>
            </Link>
          </li>
        )}
          <li>
            <Link
              to="/add-book"
              className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200"
            >
              <PlusCircle className="text-xl text-teal-400" />
              <span>Add Books</span>
            </Link>
          </li>

          <li>
            <Link
              to="/search-book"
              className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200"
            >
              <Search className="text-xl text-teal-400" />
              <span>Search Books</span>
            </Link>
          </li>

          <li>
            <Link
              to="/settings"
              className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200"
            >
              <Settings className="text-xl text-teal-400" />
              <span>Settings</span>
            </Link>
          </li>

          {/* LOGIN or LOGOUT */}
          {!isAdmin ? (
            <li>
              <Link
                to="/login"
                className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200"
              >
                <User className="text-xl text-teal-400" />
                <span>Login</span>
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-200"
              >
                <LogOut className="text-xl text-red-400" />
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 w-full p-4 bg-gray-800 text-center text-sm border-t border-gray-700">
        <p>© 2025 Library Management</p>
      </div>
    </div>
  ); 
}
