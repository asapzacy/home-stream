import axios from 'axios'

const config = {
  auth: {
    username: 'simplyrets',
    password: 'simplyrets'
  }
}

export const getHomeStream = () => {
  const url = `https://api.simplyrets.com/openhouses`
  return axios.get(url, config)
    .then(response => response.data)
    .catch(response => response.status)
}
