const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search by title, author, or subject..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-2 w-80 sm:w-96 rounded-l border border-gray-300 focus:outline-none focus:ring-1"
      />
      <button
        type="submit"
        className="bg-gray-950 text-white px-4 rounded-r cursor-pointer"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;