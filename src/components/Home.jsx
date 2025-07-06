import React from "react";
import Header from "../components/Header/Header";
import BookList from "../components/BookList/BookList";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import BookModal from "../components/BookList/BookModal";

const Home = () => {
  const [selectedBook, setSelectedBook] = React.useState(null);

  return (
    <>
      <Navbar />
      <div className="relative">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <BookList onBookSelect={setSelectedBook} />
        </div>
        <Footer />
        {selectedBook && (
          <BookModal
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        )}
      </div>
    </>
  );
};

export default Home;
