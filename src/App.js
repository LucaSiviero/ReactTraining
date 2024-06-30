import React from 'react'
import Navbar from "./components/Navbar";
import FunFacts from './components/FunFacts';
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <FunFacts />
      <Footer />
    </div>
  )
}

export default App