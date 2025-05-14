import React from 'react';

export default function BooksAdded() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 ml-64 pt-24">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">📚 Books Added</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 max-w-4xl mx-auto text-center">
        <p className="text-gray-300 text-lg">
          Book list will be fetched from the database and displayed here.
        </p>
      </div>
    </div>
  );
}
