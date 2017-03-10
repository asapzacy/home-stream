import React from 'react'
import Figure from './Figure'
import Info from './Info'

export default function Home({ image, address }) {
  return (
    <li className='homeItem'>
      <Figure image={image} address={address} />
      <Info />
    </li>
  )
}
