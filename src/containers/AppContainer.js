import React, { Component } from 'react'
import Header from '../components/Header'
import Stream from '../components/Stream'
import Loading from '../components/Loading'
import { getHomeStream } from '../helpers/api'
import '../styles/main.css'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {
      userId: 0,
      listings: [],
      isLoading: true,
      isError: false
    }
  }
  componentDidMount() {
    this.createUserId()
    this.makeRequest()
  }
  createUserId() {
    const id = Math.floor(Math.random() * 1000000)
    this.setState({ userId: id })
  }
  makeRequest() {
    getHomeStream()
      .then((data) => {
        this.setState({
          listings: data,
          isLoading: false
        })
      })
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <div className='appContainer'>
        <Header />
        <main className='mainContainer'>
          { this.state.loading ? <Loading /> : <Stream listings={this.state.listings} /> }
        </main>
      </div>
    )
  }
}

export default AppContainer
