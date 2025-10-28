import React from 'react'
import logo from '../assets/vite.svg'

const Navbar = () => {
  return (
    <div>
        <img src={logo} alt='A log page' className='logo-img'/>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Home</li>
            <li>Products</li>
        </ul>
    </div>
  )
}

export default Navbar