import React, {useEffect} from 'react';
import { Link } from "@reach/router";

import './listingList.css';


export const ListingList = (props) => {
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll)
    }
  })

  const handleOnScroll = () => {
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      props.onLoadMore()
    }
    // console.log(`scrollTop: ${scrollTop}, scrollHeight: ${scrollHeight}, clientHeight: ${clientHeight}, scrollToBottom: ${scrolledToBottom}`)
  }
  // console.log(props)
  return (
    <React.Fragment>
    {props.entries.map((listing) => {
      const url = `/listing/${listing.id}`;
      return (
        <Link key={listing.id} to={url}>
          <div className="Listing-Card">
            {listing.heroUrl ? (
              <img
                src={listing.heroUrl}
                alt={`Listing Hero ${listing.id}`}
              />
            ) : (
              <></>
            )}
            <h3>{listing.name}</h3>
          </div>
        </Link>
      );
    })}
    </React.Fragment>
  )
}



// {data.listings.map((listing) => {
//   const url = `/listing/${listing.id}`;

//   return (
//     <Link key={listing.id} to={url}>
//     <div>
//     {listing.heroUrl ? (
//       <img src={listing.heroUrl} alt={`Listing Hero ${listing.id}`} />
//     ) : (
//       <></>
//     )}
//     <h3>{listing.name}</h3>
//     </div>
//   </Link>
//   )
// })}