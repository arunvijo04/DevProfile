import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 text-white">
        <NavBar />
        
        {/* Define routes for your components */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Other routes can be added here */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
