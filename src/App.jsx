import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]">
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  )
}

export default App
