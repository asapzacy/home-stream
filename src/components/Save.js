import React from 'react'
import Add from 'react-icons/lib/md/add'
import Check from 'react-icons/lib/md/check'
import { VelocityTransitionGroup } from 'velocity-react'
import { config } from '../config/velocity'

export default function Save({ isSaved, saveListing }) {
  return (
    <button onClick={saveListing} className={'saveBtn' + (isSaved ? ' saved' : '')}>
      <VelocityTransitionGroup leave={config.leave}>{ !isSaved && <Add /> }</VelocityTransitionGroup>
      <VelocityTransitionGroup enter={config.enter}>{ isSaved && <Check /> }</VelocityTransitionGroup>
    </button>
  )
}
