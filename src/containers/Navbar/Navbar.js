import React, {Component} from 'react';
import './Navbar.css';
import airbnb from '../../images/airbnb.png';


class Navbar extends Component {
  render() {
  return (
    <div>
      <nav className='Navbar'>
        <div className='Logo'><img src={airbnb} /></div>
        <div className='rightCorner'>
          <div className='NavbarItems'><p>Become a host</p></div>
          <div className='NavbarItems'><p>Help</p></div>
          <div className='NavbarItems'><p

                                       >Sign up</p></div>
          <div className='NavbarItems'><p>Login</p></div>
        </div>

      </nav>
    </div>
  );}
};

export default Navbar;
