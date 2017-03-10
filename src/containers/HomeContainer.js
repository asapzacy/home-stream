import React, { Component } from 'react'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      isSaved: false,
      random: null
    }
    this.saveListing = this.saveListing.bind(this)
  }
  componentDidMount() {
    this.setState({ random: Math.round(Math.random()) })
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.isSaved
  }
  saveListing() {
    this.setState({ isSaved: true })
  }
  render() {
    console.log('hi')
    return <Home {...this.state} {...this.props} saveListing={this.saveListing} />
  }
}

export default HomeContainer
