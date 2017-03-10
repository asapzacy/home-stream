import React from 'react'

export default function Figure({ image, caption, address }) {
  return (
    <figure className='imageContainer'>
      <img className='image' src={image} alt={address} />
      <figcaption className='caption'>{caption}</figcaption>
    </figure>
  )
}
