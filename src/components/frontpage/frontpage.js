import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar.js';
import treehouse from '../../images/treehouse.jpg'
import './frontpage.css';

 class FrontPage extends Component {
render() {
  return (
<div>
  <div className="hero">
    <div className="booking">
      <h1>Book unique homes and experiences.</h1>

       <div className="input__where__container">
        <span className="span-block">Where</span>
        <input className="booking__input" type="text" autoFocus="autoFocus" autoComplete="off" autoCorrect="off" spellCheck="false" name="query"
          placeholder="Anywhere"></input>
      </div>

       <div className="input__check__container">
        <span className="span-block">Check-in</span>
        <input className="booking__input input__check__container__item__left" type="text" name="checkout" placeholder="mm/dd/yyyy" readOnly="readOnly"></input>
      </div>

       <div className="input__check__container">
        <span className="span-block">Checkout</span>
        <input className="booking__input input__check__container__item__right" type="text" name="checkout" placeholder="mm/dd/yyyy" readOnly="readOnly"></input>
      </div>

       <div className="input__guest__container">
        <span className="span-block">Guests</span>
        <input className="booking__input" type="text" name="guest" placeholder="Guests" readOnly="readOnly"></input>
      </div>

       <div>

       <div id="input__search__container">
        <button id="input__search__button" type="submit">
        <span>Search</span>
        </button>
        </div>
        </div>

     </div>
    <Navbar/>
         {/*<Navbar />*/}
      </div>



      <h2>Explore Airbnb</h2>
      <div className='homesCard'><img id='treehouseImage' src={treehouse} /><h3> Homes</h3></div>
      <h2>Introducing Airbnb Plus</h2>
      <p>A selection of homes verified for quality and optimal design</p>
      <div className='airbnb_plus_image'><button>EXPLORE HOMES ></button></div>
    </div>
);
}
}

 export default FrontPage;
