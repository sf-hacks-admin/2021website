import React from "react";
import "./App.css";

import LandingPage from "./screens/LandingPage";
import AboutSection from "./screens/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header />
      <LandingPage />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
