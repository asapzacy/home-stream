import React, { Component } from 'react'
import Header from '../components/Header'
import { getHomeStream } from '../helpers/api.js'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getHomeStream()
      .then((data) => {
        console.log(data)
        this.setState({
          data
        })
      })
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
      </div>
    )
  }
}

export default AppContainer
