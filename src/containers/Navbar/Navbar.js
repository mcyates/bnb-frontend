import React, {Component} from 'react';
import './Navbar.css';
import airbnb from '../../images/airbnb.png';


const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
        <div className='Logo'><img src={airbnb} /></div>
        <div className='rightCorner'>Hello</div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
