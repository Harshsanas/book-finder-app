// Home.js
import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Header />
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
