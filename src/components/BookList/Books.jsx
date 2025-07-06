import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../Loader/LoadingSpinner";

const BookList = React.lazy(() => import("../BookList/BookList"));
const BookDetails = React.lazy(() => import("../BookDetails/BookDetails"));

export default function Books() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route index element={<BookList />} />
          <Route path=":id" element={<BookDetails />} />
          <Route
            path="*"
            element={<div className="text-center py-20">Page Not Found</div>}
          />
        </Routes>
      </Suspense>
    </div>
  );
}
