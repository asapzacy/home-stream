import React from 'react'
import Image from './Image'
import Info from './Info'
import { getImageProps } from '../helpers/props'

export default function Home({ listing }) {
  return (
    <li className='homeItem'>
      <Image {...getImageProps(listing)} />
      <Info listing={listing} />
    </li>
  )
}
