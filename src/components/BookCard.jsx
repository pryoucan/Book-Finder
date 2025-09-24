const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/128x193.png?text=No+Cover";

  const author = book.author_name
    ? book.author_name.join(", ")
    : "Unknown Author";
  const year = book.first_publish_year || "N/A";

  return (
    <div className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg">{book.title}</h2>
        <p className="text-gray-600">Author: {author}</p>
        <p className="text-gray-600">First Published: {year}</p>
      </div>
    </div>
  );
};

export default BookCard;
