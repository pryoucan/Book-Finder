import BookCard from "./BookCard";

export default function BookList({ books, onSelectBook }) {
  if (books.length === 0) return <p className="text-center mt-8">No books found for your query.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {books.map((book) => (
        <div key={book.key} onClick={() => onSelectBook(book)} className="cursor-pointer">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
}