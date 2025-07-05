import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Navbar />
          <AppRoutes />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
