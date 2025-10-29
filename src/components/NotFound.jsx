import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h2>404 Page Not Found</h2>
        <button onClick={() => {navigate('/')}}> Go to Home page</button>
        {/* this the navigatin page to the home page */}
    </div>
  )
}

export default NotFound