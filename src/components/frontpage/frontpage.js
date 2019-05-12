import React, { Component } from "react";
import airbnbplussvg from "../../images/airbnb-plus.svg";
import airbnbsvg from "../../images/airbnb.svg";
import airbnbhomes from "../../images/airbnb-homes.jpg";
import "./frontpage.css";

/* Recommended for you */
import tokyo from "../../images/tokyo.jpg";
import vietnam from "../../images/vietnam.jpg";
import bangkok from "../../images/bangkok.jpg";
import medellin from "../../images/medellin.jpg";
import washington from "../../images/washington_dc.jpg";

/* Homes around the world */
import HATW1 from "../../images/Homes Around The World/135650b5-2541-4b48-878c-77044f6d399c.webp";
import HATW2 from "../../images/Homes Around The World/bb1eb2dd_original.jpg";
import HATW3 from "../../images/Homes Around The World/c2d3162d_original.webp";
import HATW4 from "../../images/Homes Around The World/d7329e9a_original.jpg";

class FrontPage extends Component {
  render() {
    return (
      <>
        {/* Intro Section */}
        <div className="hero">
          <div className="booking">
            <h1>Book unique homes and experiences.</h1>

            <div className="input__where__container">
              <span className="span-block">Where</span>
              <input
                className="booking__input"
                type="text"
                autoFocus="autoFocus"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                name="query"
                placeholder="Anywhere"
              />
            </div>

            <div className="input__check__container">
              <span className="span-block">Check-in</span>
              <input
                className="booking__input input__check__container__item__left"
                type="text"
                name="checkout"
                placeholder="mm/dd/yyyy"
                readOnly="readOnly"
              />
            </div>

            <div className="input__check__container">
              <span className="span-block">Checkout</span>
              <input
                className="booking__input input__check__container__item__right"
                type="text"
                name="checkout"
                placeholder="mm/dd/yyyy"
                readOnly="readOnly"
              />
            </div>

            <div className="input__guest__container">
              <span className="span-block">Guests</span>
              <input
                className="booking__input"
                type="text"
                name="guest"
                placeholder="Guests"
                readOnly="readOnly"
              />
            </div>

            <div>
              <div id="input__search__container">
                <button id="input__search__button" type="submit">
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
          {/* <Navbar /> Moved this up instead, not sure why its down here?? - sockervadd */}
        </div>

        {/* Explore Section */}

        <div className="container">
          <h2>Explore Airbnb</h2>
          <div className="homesCard">
            <img id="airbnbhomeImage" src={airbnbhomes} alt={airbnbhomes} />
            <h3>Homes</h3>
          </div>
          <div className="airbnb-plus-intro-text">
            <h2 className="airbnb-plus-intro-heading">
              Introducing Airbnb Plus
            </h2>
            <p>A selection of homes verified for quality and optimal design</p>
          </div>
          <div className="airbnb_plus_image_container">
            <img
              className="airbnb_plus_image"
              src={airbnbplussvg}
              alt="airbnbplussvg"
            />
            <button>
              Explore Homes{" "}
              <i className="fas fa-chevron-right fa-explore-button" />
            </button>
          </div>
          <h2>Recommended for you</h2>

          {/* Image Grid in Explore Section */}

          <div className="grid_image_and_prices_container">
            <div className="grid_image_and_prices_item">
              <img src={tokyo} alt={tokyo} />
              <div className="grid_image_and_prices_text__container">
                <h3>Tokyo</h3>
                <p>The average price is...</p>
              </div>
            </div>

            <div className="grid_image_and_prices_item">
              <img src={vietnam} alt={vietnam} />
              <div className="grid_image_and_prices_text__container">
                <h3>Vietnam</h3>
                <p>The average price is...</p>
              </div>
            </div>

            <div className="grid_image_and_prices_item">
              <img src={bangkok} alt={bangkok} />
              <div className="grid_image_and_prices_text__container">
                <h3>Bangkok</h3>
                <p>The average price is...</p>
              </div>
            </div>

            <div className="grid_image_and_prices_item">
              <img src={medellin} alt={medellin} />
              <div className="grid_image_and_prices_text__container">
                <h3>Medellin</h3>
                <p>The average price is...</p>
              </div>
            </div>

            <div className="grid_image_and_prices_item">
              <img src={washington} alt={washington} />
              <div className="grid_image_and_prices_text__container">
                <h3>Washington</h3>
                <p>The average price is...</p>
              </div>
            </div>
          </div>

          {/* Banner Section */}

          <div className="banner-experiences_container">
            <div className="banner-experiences_content">
              <img
                className="banner-experiences-airbnb-logo"
                src={airbnbsvg}
                alt="airbnb-logo"
              />
              <h4 className="banner-experiences-h4">Experiences</h4>
              <div className="banner-experiences-headers">
                <h2 className="banner-experiences-h2">
                  Because you don’t travel to sleep.
                </h2>
                <h3 className="banner-experiences-h3">
                  Memorable activities led by locals, created for the curious.
                </h3>
              </div>
              <button>Learn more</button>
            </div>
          </div>

          {/* Homes around the world */}
          <a className="HATW_title_link" href="/">
            <h2>Homes around the world <span className="fas fa-chevron-right fa-explore-button"></span></h2>
          </a>
          <div className="grid_homes_around_the_world_container">
            <div className="grid_homes_around_the_world_item">
              <img src={HATW1} alt="d7329e9a_original.jpg" />
              <div className="grid_homes_around_the_world_text__container">
                <h5 className="grid_homes_around_the_world_text__h5">
                  Entire House <span aria-hidden="true"> · </span>Bangkok
                </h5>
                <h3 className="grid_homes_around_the_world_text__h3">
                  Tropical Canggu Villa on Ricefield near the Beach
                </h3>
              </div>
            </div>

            <div className="grid_homes_around_the_world_item">
              <img src={HATW2} alt="d7329e92a_original.jpg" />
              <div className="grid_homes_around_the_world_text__container">
                <h5 className="grid_homes_around_the_world_text__h5">
                  Entire House <span aria-hidden="true"> · </span>Bangkok
                </h5>
                <h3 className="grid_homes_around_the_world_text__h3">
                  Tropical Canggu Villa on Ricefield near the Beach
                </h3>
              </div>
            </div>

            <div className="grid_homes_around_the_world_item">
              <img src={HATW3} alt="d732933e92a_original.jpg" />
              <div className="grid_homes_around_the_world_text__container">
                <h5 className="grid_homes_around_the_world_text__h5">
                  Entire Apartment <span aria-hidden="true"> · </span>Bangkok
                </h5>
                <h3 className="grid_homes_around_the_world_text__h3">
                  Tropical Canggu Villa on Ricefield near the Beach
                </h3>
              </div>
            </div>

            <div className="grid_homes_around_the_world_item">
              <img src={HATW4} alt="d732933e4492a_original.jpg" />
              <div className="grid_homes_around_the_world_text__container">
                <h5 className="grid_homes_around_the_world_text__h5">
                  Entire House <span aria-hidden="true"> · </span>Bangkok
                </h5>
                <h3 className="grid_homes_around_the_world_text__h3">
                  Tropical Canggu Villa on Ricefield near the Beach
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FrontPage;
