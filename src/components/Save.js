import React from 'react'
import Add from 'react-icons/lib/md/add'
import Check from 'react-icons/lib/md/check'


export default function Save({ isSaved, saveListing }) {
  return (
    <button onClick={saveListing} className={'saveBtn' + (isSaved ? ' saved' : '')}>
      <span className='saveIcon'>{ isSaved ? <Check /> : <Add /> }</span>
    </button>
  )
}
