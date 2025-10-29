import React from 'react';
import logo from '../assets/vite.svg';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <img src={logo} alt='A log page' className='logo-img'/>
        <ul>
          <NavLink to={'/about'}>
            <li>About</li>
          </NavLink>
          <NavLink to={'/contact'}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={'/'}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/products'}>
            <li>Products</li>
          </NavLink>
        </ul>
        <button onClick={() => { navigate('/about', {replace:true}) } }>Get Started</button>
    </div>
  )
}

export default Navbar