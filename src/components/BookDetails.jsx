export default function BookDetails({ book, goBack }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <button
        onClick={goBack}
        className="mb-4 px-3 py-1 text-white bg-black rounded cursor-pointer"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row gap-4">
        {book.cover_i && (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
            alt={book.title}
            className="w-64 h-auto"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          {book.author_name && (
            <p className="mb-2">
              <span className="font-semibold">Author:</span> {book.author_name.join(", ")}
            </p>
          )}
          {book.first_publish_year && (
            <p className="mb-2">
              <span className="font-semibold">First Published:</span> {book.first_publish_year}
            </p>
          )}
          {book.subject && (
            <p>
              <span className="font-semibold">Subjects:</span> {book.subject.slice(0, 5).join(", ")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
