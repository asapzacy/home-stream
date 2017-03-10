import React from 'react'
import Home from './Home'

export default function Stream({ listings }) {
  return (
    <ul className='homesList'>
      { listings.map(item => <Home {...item} key={item.openHouseId} /> ) }
    </ul>
  )
}
