import React from "react";
import LoadingSpinner from "../Loader/LoadingSpinner";

const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-sky-100/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-sky-200">
        <div className="sticky top-0 bg-white z-10 p-4 border-b border-sky-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-sky-900 truncate max-w-[80%]">
            {book.title}
          </h2>
          <button
            onClick={onClose}
            className="text-sky-500 cursor-pointer hover:text-sky-700 p-1 rounded-full hover:bg-sky-100 transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/5">
              <div className="bg-sky-50 rounded-xl overflow-hidden shadow-lg aspect-[2/3] flex items-center justify-center border border-sky-200">
                {book.cover_id ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-sky-400 text-center p-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <p>No cover available</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://openlibrary.org${book.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View on Open Library
                </a>
                <button className="border border-sky-300 text-sky-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-sky-50 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add to Reading List
                </button>
              </div>
            </div>
            <div className="lg:w-3/5 space-y-6">
              <div className="space-y-2">
                <p className="text-xl text-sky-800">
                  by {book.author ? book.author.join(", ") : "Unknown Author"}
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        star <= 4 ? "text-amber-400" : "text-sky-200"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-sky-600 ml-1">
                    (24 reviews)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                  <h3 className="font-semibold text-lg mb-3 text-sky-900 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-sky-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Publication
                  </h3>
                  <div className="space-y-2 text-sky-800">
                    <p className="flex items-start gap-2">
                      <span className="font-medium min-w-[120px]">
                        Published:
                      </span>
                      <span>{book.first_publish_year || "Unknown"}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-medium min-w-[120px]">
                        Editions:
                      </span>
                      <span>{book.edition_count || "Unknown"}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-medium min-w-[120px]">
                        Publisher:
                      </span>
                      <span>{book.publisher || "Unknown"}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-medium min-w-[120px]">
                        Language:
                      </span>
                      <span>{book.language || "Unknown"}</span>
                    </p>
                  </div>
                </div>
                {book.subjects && (
                  <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                    <h3 className="font-semibold text-lg mb-3 text-sky-900 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-sky-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      Subjects & Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {book.subjects.slice(0, 8).map((subject, index) => (
                        <span
                          key={index}
                          className="bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full"
                        >
                          {subject.length > 20
                            ? `${subject.substring(0, 20)}...`
                            : subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                <h3 className="font-semibold text-lg mb-3 text-sky-900 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Description
                </h3>
                <p className="text-sky-800">
                  {book.description || (
                    <span className="text-sky-600">
                      No description available for this book.
                    </span>
                  )}
                </p>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
                <h3 className="font-semibold text-lg mb-3 text-sky-900 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-sky-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Additional Information
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
