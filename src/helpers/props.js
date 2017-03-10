
export const getImageProps = (data, random) => ({
  image: data.photos[random],
  caption: `${data.mls.area} — ${data.address.city}, ${data.address.state}`,
  address: data.address.full
})

export const getLocationProps = (data) => ({
  street: `${data.address.streetNumberText} ${data.address.streetName}`,
  region: `${data.address.city}, ${data.address.state} ${data.address.postalCode}`
})

export const getPriceProps = (data) => ({
  price: `$${data.listPrice.toLocaleString()}`
})

export const getDetailsProps = (data) => ({
  rooms: data.property.bedrooms,
  baths: `${data.property.bathsHalf}/${data.property.bathsFull}`,
  stories: data.property.stories,
  area: data.property.area.toLocaleString(),
  year: data.property.yearBuilt
})

export const getMlsProps = (data) => ({
  date: data.listDate,
  id: `#${data.mlsId}`
})
