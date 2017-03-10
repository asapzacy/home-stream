import axios from 'axios'
import { config } from '../config/simplyrets'

export const getHomeStream = () => {
  const url = `https://api.simplyrets.com/openhouses`
  return axios.get(url, config)
    .then(response => response.data)
    .catch(error => error.response)
}
