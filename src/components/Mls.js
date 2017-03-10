import React from 'react'

export default function Mls({ date, id }) {
  return (
    <section className='mlsContainer'>
      <span>{date}</span>
      <span className='bullet'>•</span>
      <span>{id}</span>
    </section>
  )
}
