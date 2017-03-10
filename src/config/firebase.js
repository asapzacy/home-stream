import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAFgA_z4mJtoNmaMnvLKk9D-XfkqHMgAyg',
  authDomain: 'home-stream.firebaseapp.com',
  databaseURL: 'https://home-stream.firebaseio.com',
  storageBucket: 'home-stream.appspot.com',
  messagingSenderId: '440711553579'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
