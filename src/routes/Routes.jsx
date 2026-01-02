import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About' 
import Thank from '../pages/Thank'
import { Routes, Route } from 'react-router-dom'
const Routeconfig = () => {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/contact/thank' element={<Thank/>}/>
      </Routes>
  )
}

export default Routeconfig
