import React from 'react'

export default function Figure({ image, address }) {
  return (
    <figure className='figureContainer'>
      <img className='figureImage' src={image} alt={address} />
      <figcaption className='figureCaption'>{address}</figcaption>
    </figure>
  )
}
