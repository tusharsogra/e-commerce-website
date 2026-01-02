import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
 const navigate = useNavigate();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [feedback, setFeedback] = useState("")
  const changeEmailHandler=(e)=>{
    setEmail(e.target.value);
  }
  const changeNameHandler=(e)=>{
    setName(e.target.value);
  }
  const changeFeedbackHandler=(e)=>{
    setFeedback(e.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    console.log( name)
    console.log(email)
    console.log(feedback)
    setEmail("");
    setFeedback("");
    setName("");
    navigate("/contact/thank")

  }
  return (
    <div className='flex flex-col gap-5 justify-center items-center p-10'>
      <div className='bg-amber-100 rounded-2xl p-2 w-3xs text-center h-10 font-bold'> Submit your Response Here</div>
      <form onSubmit={submitHandler} className='bg-white p-7 flex items-center justify-evenly rounded-2xl flex-col gap-5 w-2xl h-96'>
        <input name='name' type="text" required={true} value={name} placeholder='enter your name here' className='border rounded-2xl w-1/2 text-center' onChange={changeNameHandler} />
       <input name='email' type="text" value={email} required={true} placeholder='enter your email here' className='border rounded-2xl w-1/2 text-center' onChange={changeEmailHandler} />
        <textarea name="response" required={true} className='border w-1/2 rounded-2xl text-center' rows={3} placeholder='Enter Your Feedback Here' value={feedback}  onChange={changeFeedbackHandler} id="response"></textarea>
        <button type='submit' className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 rounded-2xl max-w-2xl cursor-pointer">Submit Response</button>
      </form>
    </div>
  )
}

export default Contact
