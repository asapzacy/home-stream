import React from 'react'
import HomeContainer from '../containers/HomeContainer'

export default function Stream({ listings }) {
  return (
    <ul className='homesList'>
      { listings.map(item => <HomeContainer {...item} key={item.listing.listingId} /> ) }
    </ul>
  )
}
