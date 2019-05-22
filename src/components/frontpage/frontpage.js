import React, { Component } from "react";
import { Hero } from "../Hero/Hero";
import { LISTINGS } from "../../queries/LISTINGS";
import { Link } from "@reach/router";
import { Query } from "react-apollo";
import "./frontpage.css";


class FrontPage extends Component {
  render() {
    return (
      <div className="front">
      <Hero />
      <Query query={LISTINGS} >
      {({loading, error, data}) => {
        if (loading) {
					return null;
				}
				if (error) {
					return `Error: ${error}`
        }
        return (
          <>
          {data.listings.map((listing) => {
            const url = `/listing/${listing.id}`;

            return (
              <Link key={listing.id} to={url}>
              <div>
              {listing.heroUrl ? (
                <img src={listing.heroUrl} alt={`Listing Hero ${listing.id}`} />
              ) : (
                <></>
              )}
              <h3>{listing.name}</h3>
              </div>
            </Link>
            )
          })}
          </>
        )
      }}
      </Query>
      </div>
    );
  }
}

export default FrontPage;
