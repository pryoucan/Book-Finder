import { useState } from "react";
import { fetchBooks } from "../api/OpenLibrary";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const searchBooks = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    setSelectedBook(null);
    setHasSearched(true);

    try {
      const res = await fetchBooks(query);
      setBooks(res)
    } catch (error) {
      console.error(error);
      setError("Failed to fetch books. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center my-8">
          <div className="w-12 h-12 border-4 border-black-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    if (error) {
      return <p className="text-center mt-8 text-red-600">{error}</p>;
    }

    if (selectedBook) {
      return <BookDetails book={selectedBook} goBack={() => setSelectedBook(null)} />;
    }
    
    if (hasSearched) {
      return <BookList books={books} onSelectBook={setSelectedBook} />;
    }

    return <p className="text-center mt-8 text-gray-500">Search for a book to get started!</p>;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <SearchBar searchQuery={query} setSearchQuery={setQuery} onSearch={searchBooks} />
      {renderContent()}
    </div>
  );
}