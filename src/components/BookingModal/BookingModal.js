import React, {Component} from 'react';
import './BookingModal.css';

class BookingModal extends Component {
  render() {
    return (
      <div className='modal'>

        <div><h2>Book unique homes and build memorable experiences</h2></div>
      <div>WHERE</div>
        <div><input placeholder='Anywhere'/></div>
        <div className='flexRow'> <div>CHECK-IN</div><div>CHECKOUT</div></div>
        <div><input placeholder='mm/dd/yyyy' /> <input placeholder='mm/dd/yyyy'/> </div>
        <div>GUESTS</div>
        <div><input placeholder='Guests' /> </div>
        <div className='buttonAlign'>
          <button>Search</button>
        </div>

      </div>
        )
        }
};

export default BookingModal;
