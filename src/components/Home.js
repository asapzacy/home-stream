import React from 'react'
import Image from './Image'
import Info from './Info'
import { getImageProps } from '../helpers/props'

export default function Home({ listing, photo, isSaved, saveListing }) {
  return (
    <li className='homeItem'>
      <Image {...getImageProps(listing.address, listing.mls, listing.photos, photo)} />
      <Info listing={listing} isSaved={isSaved} saveListing={saveListing} />
    </li>
  )
}
