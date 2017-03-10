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
    .catch(function(error) {
      if (error.response) {
        console.log(error.response);
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        console.log('Error', error.message);
        console.log('Error', error.message);
      }
      // console.log(error.config);
    });
}
