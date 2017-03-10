import React from 'react'
import Save from './Save'
import { formatDate } from '../helpers/utils'

export default function Mls({ date, id, isSaved, saveListing }) {
  localStorage.getItem('userId') ? console.log('yess') : console.log('noo')
  return (
    <section className='mlsContainer'>
      <div className='mlsData'>
        <span>{formatDate(date)}</span>
        <span className='bullet'>•</span>
        <span>{id}</span>
      </div>
      <Save isSaved={isSaved} saveListing={saveListing} />
    </section>
  )
}
