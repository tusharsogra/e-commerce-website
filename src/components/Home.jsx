import React from 'react'
import Button from './Button'
const Home = () => {
  return (
    <div className='text-white flex flex-col justify-center items-center gap-20 m-10'>
      <div className='flex justify-center items-center text-white font-bold font-sans text-4xl gap-4'> <h1>Welcome to the E-commerce-website </h1><div className='flex justify-center items-center'>
        <h1 className='text-white font-bold font-sans'>ClickN</h1>
        <p className='text-green-400 font-bold font-sans '>Buy</p>
      </div>
      </div>
      <div className='flex justify-center items-center gap-10'>
        <Button text={"Login"} />
        <Button text={"Help Me"} />
      </div>
      <div>
        <h1 className='text-2xl font-sans font-bold flex flex-col items-center justify-center gap-4 '>
          <p>Welcome to a smarter way to begin.</p>
          <p>One platform. One account. Unlimited possibilities.</p>
          <p>Log in to unlock your personalized experience and continue your journey.</p>
        </h1>
      </div>
    </div>
  )
}

export default Home
