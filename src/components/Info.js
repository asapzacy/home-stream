import React from 'react'
import Location from './Location'
import Price from './Price'
import Details from './Details'
import Mls from './Mls'
import { getLocationProps, getPriceProps, getDetailsProps, getMlsProps } from '../helpers/props'

export default function Info({ listing , isSaved, saveListing }) {
  return (
    <main className='infoContainer'>
      <Location {...getLocationProps(listing)} />
      <Price {...getPriceProps(listing)} />
      <Details {...getDetailsProps(listing)} />
      <Mls {...getMlsProps(listing)} isSaved={isSaved} saveListing={saveListing} />
    </main>
  )
}
