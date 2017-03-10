
export const getImageProps = (address, mls, photos, i) => ({
  image: photos[i],
  caption: `${mls.area} — ${address.city}, ${address.state}`,
  address: address.full
})

export const getLocationProps = (address) => ({
  street: `${address.streetNumberText} ${address.streetName}`,
  region: `${address.city}, ${address.state} ${address.postalCode}`
})

export const getPriceProps = (price) => ({
  price: `$${price.toLocaleString()}`
})

export const getDetailsProps = (property) => ({
  rooms: property.bedrooms,
  baths: `${property.bathsHalf}/${property.bathsFull}`,
  stories: property.stories,
  area: property.area.toLocaleString(),
  year: property.yearBuilt
})

export const getMlsProps = (dt, id) => ({
  date: `${dt.slice(5,7)}/${dt.slice(8,10)}/${dt.slice(0,4)}`,
  id: `#${id}`
})
