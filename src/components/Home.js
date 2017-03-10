import React from 'react'
import Image from './Image'
import Info from './Info'
import { getImageProps, getInfoProps } from '../helpers/utils'

export default function Home({ listing }) {
  return (
    <li className='homeItem'>
      <Image {...getImageProps(listing)} />
      <Info />
    </li>
  )
}
