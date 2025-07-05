import React from "react";
import Navbar from "./Navbar/Navbar";
import aboutImg from "../assets/about-image.jpeg";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section
        className="py-12"
        style={{
          marginTop: "64px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-sky-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              About BookHub
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-sky-700">
              Discover our story and what makes us passionate about books.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="About BookHub"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 opacity-30"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-sky-900">Our Story</h2>
              <p className="text-lg text-sky-800 leading-relaxed">
                BookHub was founded in 2025 with a simple mission: to connect
                readers with their next favorite book. What started as a small
                passion project has grown into a thriving community of book
                lovers.
              </p>
              <p className="text-lg text-sky-800 leading-relaxed">
                We believe that books have the power to transform lives. Our
                carefully curated selection and personalized recommendations
                help readers discover hidden gems and timeless classics.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sky-100">
                  <div className="text-sky-600 mb-3">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-900">
                    10,000+ Titles
                  </h3>
                  <p className="text-sky-700">
                    Curated collection of books across all genres
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-sky-100">
                  <div className="text-sky-500 mb-3">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-sky-900">
                    500,000+ Readers
                  </h3>
                  <p className="text-sky-700">
                    Join our growing community of book lovers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 bg-gradient-to-r from-sky-100 to-sky-50 rounded-2xl p-8 text-sky-900 border border-sky-200">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              To inspire, educate, and connect readers through the power of
              books. We're committed to making literature accessible to everyone
              and fostering a lifelong love of reading.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
