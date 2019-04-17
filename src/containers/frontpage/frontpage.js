import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import BookingModal from '../BookingModal/BookingModal.js';

import './frontpage.css';

class FrontPage extends Component {
render() {
  return (
    <div>
      <div className='hero'>
    <Navbar/>
    <BookingModal />
    </div>
      <p>Hello</p>
    </div>
);
}
}

export default FrontPage;
