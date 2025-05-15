import React, { useEffect, useState } from 'react';

export default function BooksAdded() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('http://localhost:3001/books');
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 ml-64 pt-24">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">📚 Books Added</h1>

      {loading ? (
        <div className="text-center text-gray-300 text-lg">Loading books...</div>
      ) : books.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">No books found in the database.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 flex flex-col items-center text-center"
            >
              {book.cover && (
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  className="w-32 h-48 object-cover rounded shadow mb-4"
                />
              )}
              <h2 className="text-xl font-semibold text-teal-300">{book.title}</h2>
              <p className="text-gray-300 mt-1">by {book.author}</p>
              <p className="text-gray-400 text-sm">Published: {book.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
