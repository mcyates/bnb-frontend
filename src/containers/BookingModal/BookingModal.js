import React, {Component} from 'react';
import './BookingModal.css';

class BookingModal extends Component {
  render() {
    return (
      <div className='modal'>

        <div><h2>Book unique homes and build memorable adventures</h2></div>
        <div>Where</div>
        <div><input placeholder='DESTINATION'/></div>
        <div className='flexRow'> <div>CHECK-IN</div><div>CHECKOUT</div></div>
        <div><input /> <input /> </div>
        <div>GUESTS</div>
        <div><input /> </div>
      <button>Search</button>


      </div>
        )
        }
};

export default BookingModal;
