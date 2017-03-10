
export const getImageProps = (data) => ({
  image: data.photos[0],
  caption: `${data.mls.area} — ${data.address.city}, ${data.address.state}`,
  address: data.address.full
})

export const getInfoProps = (data) => ({
  address: `${data.listing.address.full}, ${data.listing.address.city}, ${data.listing.address.state}`
})
