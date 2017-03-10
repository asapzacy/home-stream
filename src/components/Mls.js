import React from 'react'
import { formatDate } from '../helpers/utils'

export default function Mls({ date, id }) {
  return (
    <section className='mlsContainer'>
      <span>{formatDate(date)}</span>
      <span className='mlsDivider'>•</span>
      <span>{id}</span>
    </section>
  )
}
