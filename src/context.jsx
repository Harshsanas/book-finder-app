import React, { useState, useContext, useEffect, useCallback } from "react";

const URL = "https://openlibrary.org/search.json?";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookType, setBookType] = useState("all");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("Featured Books");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [randomBooks, setRandomBooks] = useState([]);

  const fetchRandomBooks = useCallback(async () => {
    setLoading(true);
    try {
      const subjects = [
        "fiction",
        "fantasy",
        "science",
        "history",
        "biography",
      ];
      const randomSubject =
        subjects[Math.floor(Math.random() * subjects.length)];
      const response = await fetch(`${URL}subject=${randomSubject}&limit=12`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.slice(0, 12).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
            subject,
            language,
            publisher,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
            subjects: subject,
            language: language?.[0],
            publisher: publisher?.[0],
          };
        });
        setRandomBooks(newBooks);
        setBooks(newBooks);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      if (!searchTerm.trim()) {
        setResultTitle("Featured Books");
        setCurrentPage(1);
        setTotalPages(1);
        return;
      }

      let query = `title=${searchTerm}`;
      if (bookType !== "all") {
        query += `&subject=${bookType}`;
      }
      query += `&page=${currentPage}`;

      const response = await fetch(`${URL}${query}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      const { docs, numFound } = data;

      if (docs) {
        const newBooks = docs.slice(0, 20).map((bookSingle) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
            subject,
            language,
            publisher,
          } = bookSingle;

          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
            subjects: subject,
            language: language?.[0],
            publisher: publisher?.[0],
          };
        });

        setBooks(newBooks);
        setResultTitle(
          newBooks.length > 0
            ? `Your Search Results (${numFound} found)`
            : "No Search Results Found!"
        );
        setTotalPages(Math.ceil(numFound / 20));
      } else {
        setBooks([]);
        setResultTitle("No Search Results Found!");
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResultTitle("Error fetching results");
    } finally {
      setLoading(false);
    }
  }, [searchTerm, bookType, currentPage]);

  useEffect(() => {
    fetchRandomBooks();
  }, [fetchRandomBooks]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, bookType]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchBooks();
    }, 500);

    return () => clearTimeout(timerId);
  }, [fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books: searchTerm.trim() ? books : randomBooks,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        bookType,
        setBookType,
        currentPage,
        setCurrentPage,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
