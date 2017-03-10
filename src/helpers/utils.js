
export const getListingProps = (data) => ({
  image: data.listing.photos[0],
  address: `${data.listing.address.full}, ${data.listing.address.city}, ${data.listing.address.state}`
})
