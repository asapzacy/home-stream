import React, { Component } from 'react'
import Stream from '../components/Stream'
import Loading from '../components/Loading'
import { getHomeStream } from '../helpers/api'

class StreamContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      isLoading: true
    }
  }
  componentDidMount() {
    this.makeRequest()
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
      <main className='mainContainer'>
        { this.state.isLoading ? <Loading /> : <Stream {...this.state} /> }
      </main>
    )
  }
}

export default StreamContainer
