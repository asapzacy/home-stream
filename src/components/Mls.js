import React from 'react'
import Save from './Save'
import { formatDate } from '../helpers/utils'

export default function Mls({ date, id }) {
  return (
    <section className='mlsContainer'>
      <div className='mlsData'>
        <span>{formatDate(date)}</span>
        <span className='bullet'>•</span>
        <span>{id}</span>
      </div>
    </section>
  )
}
