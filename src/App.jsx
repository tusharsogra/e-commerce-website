import React from 'react'
import Navbar from './components/Navbar'
import Routeconfig from './routes/Routes'
const App = () => {
  return (
    <div className=" absolute top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]">
      <Navbar />
      <Routeconfig />
    </div>
  )
}

export default App
