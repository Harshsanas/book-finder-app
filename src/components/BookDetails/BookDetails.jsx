import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import LoadingSpinner from "../Loader/LoadingSpinner";

const BookDetails = () => {
  const { id } = useParams();
  const { books, loading } = useGlobalContext();
  const [book, setBook] = React.useState(null);

  useEffect(() => {
    if (books.length > 0) {
      const foundBook = books.find((book) => book.id === `/${id}`);
      setBook(foundBook);
    }
  }, [id, books]);

  if (loading) return <LoadingSpinner />;
  if (!book) return <div className="text-center py-20">Book not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            {book.cover_id ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                alt={book.title}
                className="w-full h-auto"
              />
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                No cover available
              </div>
            )}
          </div>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-700 mb-4">
            by {book.author ? book.author.join(", ") : "Unknown Author"}
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">First Published</h3>
              <p>{book.first_publish_year || "Unknown year"}</p>
            </div>
            <div>
              <h3 className="font-semibold">Editions</h3>
              <p>{book.edition_count || "Unknown"}</p>
            </div>
          </div>
          <Link
            to="/book"
            className="mt-6 inline-block bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded transition-colors"
          >
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
