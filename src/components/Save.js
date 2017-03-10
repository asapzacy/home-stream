import React from 'react'
import Add from 'react-icons/lib/md/add'
import Check from 'react-icons/lib/md/check'
import { VelocityTransitionGroup } from 'velocity-react'

export const config = {
  enter: {
    animation:'fadeIn',
    duration:440,
    delay:440,
    display:'inline-block'
  },
  leave: {
    animation: 'fadeOut',
    duration:220,
    delay:0,
    display:'inline-block'
  }
}

export default function Save({ isSaved, saveListing }) {
  return (
    <section className='saveContainer'>
      <button onClick={saveListing} className={'saveBtn' + (isSaved ? ' saved' : '')}>
        <VelocityTransitionGroup className='saveIcon' leave={config.leave}>
          { !isSaved && <Add /> }
        </VelocityTransitionGroup>
        <VelocityTransitionGroup className='saveIcon' enter={config.enter}>
          { isSaved && <Check /> }
        </VelocityTransitionGroup>
      </button>
    </section>
  )
}
