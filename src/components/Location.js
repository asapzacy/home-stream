import React from 'react'

export default function Location({ street, region }) {
  return (
    <section className='locationContainer'>
      <h1>{street}</h1>
      <h2>{region}</h2>
    </section>
  )
}
