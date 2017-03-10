import React from 'react'

export default function Loading() {
  return (
    <div className='loadingContainer'>
      <div className='svgContainer'>
        <svg className='svg' viewBox='25 25 50 50'>
          <circle className='svgPath' cx={50} cy={50} r={20} fill='none' strokeWidth={2} strokeMiterlimit={10} />
        </svg>
      </div>
    </div>
  )
}
