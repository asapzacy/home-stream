import React, { Component } from 'react'
import Header from '../components/Header'
import StreamContainer from './StreamContainer'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = { userId: 0 }
  }
  componentDidMount() {
    this.setUserId()
  }
  setUserId() {
    let id = localStorage.getItem('userId')
    if (!id) {
      id = Math.floor(Math.random() * 1000000000)
      localStorage.setItem('userId', id)
    }
    this.setState({ userId: id })
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <StreamContainer {...this.state} />
      </div>
    )
  }
}

export default AppContainer
