
export const getImageProps = (data, photo) => ({
  image: data.photos[photo],
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
  date: `${data.listDate.slice(5,7)}/${data.listDate.slice(8,10)}/${data.listDate.slice(0,4)}`,
  id: `#${data.mlsId}`
})
