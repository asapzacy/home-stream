import React from 'react'

export default function Details({ rooms, baths, area, stories, year }) {
  return (
    <section className='detailsContainer'>
      <ul className='detailsList'>
        <li className='detailsItem'><span>{rooms}</span>{'rooms'}</li>
        <li className='detailsItem'><span>{baths}</span>{'baths'}</li>
        <li className='detailsItem'><span>{stories}</span>{'stories'}</li>
        <li className='detailsItem'><span>{area}</span>{'sq. ft.'}</li>
        <li className='detailsItem'><span>{year}</span>{'built'}</li>
      </ul>
    </section>
  )
}
