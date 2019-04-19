import React, {Component} from 'react';
import './Navbar.css';
import airbnbsvg from '../../images/airbnb.svg';


 const Navbar = () => {
  return (
      <nav className='Navbar'>
        <a href="/">
          <img className='Logo' src={airbnbsvg} alt="airbnb-logo"/>
        </a>
        <ul className='rightCorner'>
          <li>Become a host</li>
          <li>Help</li>
          <li>Sign up</li>
          <li>Log in</li>
        </ul>
      </nav>
  );
};

 export default Navbar;
