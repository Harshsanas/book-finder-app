import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { setSearchTerm, setResultTitle, setCurrentPage } = useGlobalContext();
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (inputValue.trim() === "") {
      setResultTitle("Featured Books");
      setCurrentPage(1);
      return;
    }

    const timerId = setTimeout(() => {
      if (isTyping) {
        setSearchTerm(inputValue);
        setCurrentPage(1);
        setIsTyping(false);
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, [inputValue, isTyping, setSearchTerm, setResultTitle, setCurrentPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempSearchTerm = inputValue.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("");
      setResultTitle("Featured Books");
    } else {
      setSearchTerm(tempSearchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="flex rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <input
          type="text"
          placeholder="Search for books, authors, genres..."
          className="flex-grow px-6 py-4 text-gray-800 focus:outline-none text-base placeholder-gray-400 bg-white"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsTyping(true);
          }}
        />
        <button
          type="submit"
          className="bg-gradient-to-r cursor-pointer from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-6 py-4 font-medium transition-colors duration-300 flex items-center"
        >
          Search
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
