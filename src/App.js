import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";
import About from "./components/About";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import { FundProvider } from "./context/FundContext";

function App() {
  return (
    <FundProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/fund" element={<ListPage />} />
          <Route path="/fund/:fundName" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </FundProvider>
  );
}

export default App;
