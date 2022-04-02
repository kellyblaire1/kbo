// import React from 'react';
// import './App.css';

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HireModal from "./components/HireModal";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Tech />
      <Footer />
      <HireModal />
    </>
  );
}

export default App;
