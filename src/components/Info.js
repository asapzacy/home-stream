import React from 'react'
import Location from './Location'
import Price from './Price'
import Details from './Details'
import Mls from './Mls'
import Save from './Save'
import { getLocationProps, getPriceProps, getDetailsProps, getMlsProps } from '../helpers/props'

export default function Info({ listing , isSaved, saveListing }) {
  return (
    <main className='infoContainer'>
      <Location {...getLocationProps(listing.address)} />
      <Price {...getPriceProps(listing.listPrice)} />
      <Details {...getDetailsProps(listing.property)} />
      <footer className='footerContainer'>
        <Mls {...getMlsProps(listing.listDate, listing.mlsId)} />
        <Save isSaved={isSaved} saveListing={saveListing} />
      </footer>
    </main>
  )
}
