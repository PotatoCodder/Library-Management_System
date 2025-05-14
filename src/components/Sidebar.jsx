import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, PlusCircle, Search, Settings } from 'lucide-react'; // Icons from lucide-react

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar open state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the state when called
  };

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar} 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-teal-400 p-2 bg-gray-800 rounded-full"
      >
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Sidebar */}
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
            {/* Books Added */}
            <li>
              <Link
                to="/books"
                className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200 ease-in-out"
              >
                <Book className="text-xl text-teal-400" />
                <span>Books Added</span>
              </Link>
            </li>

            {/* Add Books */}
            <li>
              <Link
                to="/add-book"
                className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200 ease-in-out"
              >
                <PlusCircle className="text-xl text-teal-400" />
                <span>Add Books</span>
              </Link>
            </li>

            {/* Search Books */}
            <li>
              <Link
                to="/search-book"
                className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200 ease-in-out"
              >
                <Search className="text-xl text-teal-400" />
                <span>Search Books</span>
              </Link>
            </li>

            {/* Settings */}
            <li>
              <Link
                to="/settings"
                className="flex items-center space-x-4 p-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition duration-200 ease-in-out"
              >
                <Settings className="text-xl text-teal-400" />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 bg-gray-800 text-center text-sm border-t border-gray-700">
          <p>© 2025 Library Management</p>
        </div>
      </div>
    </>
  );
}
