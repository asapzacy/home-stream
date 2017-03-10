import React from 'react'

export default function Location({ street, region }) {
  return (
    <section className='locationContainer'>
      <h1 className='street'>{street}</h1>
      <h2 className='region'>{region}</h2>
    </section>
  )
}
