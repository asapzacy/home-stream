import React, { Component } from 'react'
import Header from '../components/Header'
import { getStream } from '../helpers/api.js'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    this.setState({ data: getStream() })
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
