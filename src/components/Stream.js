import React from 'react'
import Home from './Home'
import { getListingProps } from '../helpers/utils'


export default function Stream({ listings }) {
  return (
    <ul className='homesList'>
      { listings.map(item => <Home {...getListingProps(item)} key={item.openHouseId} /> ) }
    </ul>
  )
}
