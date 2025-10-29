import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();
  return (
  <>
    <h1>Contact Page</h1>
    <div>
      <button onClick={() => { navigate('form')}}>Contact Form</button>
      <button onClick={() => { navigate('info')}}>Contact Info</button>
      <button onClick={() => { navigate('')}}>Contact Home Page</button>
    </div>
  </>
  )
}

export default Contact