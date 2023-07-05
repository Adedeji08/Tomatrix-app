import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./views/AboutUs";
import Contact from "./views/Contact";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ClipLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader color="#ffffff" className="bg-red-500 m-[20%] ml-[600px]" loading={loading} size={50} />
      ) : (
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contactus" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
