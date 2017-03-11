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
    const id = localStorage.getItem('userId') || Math.floor(Math.random() * 1000000000)
    this.setState({ userId: id })
    localStorage.setItem('userId', id)
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
