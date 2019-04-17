import React, {Component} from 'react';
import './Navbar.css';
import airbnb from '../../images/airbnb.png';


const Navbar = () => {
  return (
    <div>
      <nav className='Navbar'>
        <div className='Logo'><img src={airbnb} /></div>
        <div className='rightCorner'>
          <div>Become a host</div>
          <div>Help</div>
          <div>Sign up</div>
          <div>Login</div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
