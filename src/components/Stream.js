import React from 'react'
import HomeContainer from '../containers/HomeContainer'

export default function Stream({ listings, userId }) {
  return (
    <ul className='homesList'>
      { listings.map(item => <HomeContainer listing={item.listing} userId={userId} key={item.listing.listingId} />) }
    </ul>
  )
}
