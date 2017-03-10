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
    this.createUserId()
  }
  createUserId() {
    const id = Math.floor(Math.random() * 1000000000)
    this.setState({ userId: id }, () => {
      this.setUserId()
    })
  }
  setUserId() {
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', this.state.userId)
    }
    console.log(localStorage['firebase:previous_websocket_failure'])
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
