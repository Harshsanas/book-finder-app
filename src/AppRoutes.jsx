import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "../pages/About";
// import BookList from "../components/Book/BookList";
// import BookDetails from "../components/Book/BookDetails";
// import NotFound from "../pages/NotFound";
import Home from "./components/Home";
import About from "./components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default AppRoutes;
