import React from 'react';
import logo from '../assets/vite.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='A log page' className='logo-img'/>
        <ul>
          <Link to={'/about'}>
            <li>About</li>
          </Link>
          <Link to={'/contact'}>
            <li>Contact</li>
          </Link>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
          <Link to={'/products'}>
            <li>Products</li>
          </Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar