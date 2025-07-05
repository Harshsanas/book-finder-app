// Header.js
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import libraryImg from "../../assets/library-img.jpg";

export default function Header() {
  return (
    <header
      className="text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(125, 211, 252, 0.85), rgba(186, 230, 253, 0.85)), url(${libraryImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
        minHeight: "500px",
        marginTop: "64px",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full pt-16 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 to-white">
              Favorite Book
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
            Explore a vast collection of books from around the world. Find
            exactly what you're looking for with our powerful search.
          </p>
          <SearchForm />
        </div>
      </div>
    </header>
  );
}
