import React, { Component } from 'react'
import Stream from '../components/Stream'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { getHomeStream } from '../helpers/api'

class StreamContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: [],
      isLoading: true,
      isError: false
    }
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getHomeStream()
      .then((data) => {
        this.setState({ listings: data })
      })
      .catch((error) => {
        this.setState({ isError: true })
      })
      .then(() => this.setState({ isLoading: false }))
  }
  render() {
    return (
      <main className='mainContainer'>
        { this.state.isLoading
            ? <Loading />
            : this.state.isError
              ? <Error />
              : <Stream listings={this.state.listings} userId={this.props.userId} />
        }
      </main>
    )
  }
}

export default StreamContainer
