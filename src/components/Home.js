import React from 'react'
import Image from './Image'
import Info from './Info'
import { getImageProps } from '../helpers/props'

export default function Home({ listing, random, isSaved, saveListing }) {
  return (
    <li className='homeItem'>
      <Image {...getImageProps(listing, random)} />
      <Info listing={listing} isSaved={isSaved} saveListing={saveListing} />
    </li>
  )
}
