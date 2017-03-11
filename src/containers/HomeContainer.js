import React, { Component } from 'react'
import { ref } from '../config/firebase'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {
      isSaved: false,
      photo: 0
    }
    this.saveListing = this.saveListing.bind(this)
  }
  componentDidMount() {
    this.pickRandomPhoto()
    this.checkIfSaved()
  }
  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.isSaved
  }
  pickRandomPhoto() {
    this.setState({ photo: Math.round(Math.random()) })
  }
  checkIfSaved() {
    const userId = this.props.userId
    const homeId = this.props.listing.mlsId
    ref.once('value', (snapshot) => {
      if (snapshot.hasChild(`users/${userId}/homes/${homeId}`)) {
        this.setState({ isSaved: true })
      }
    })
  }
  saveListing() {
    const userId = this.props.userId
    const homeId = this.props.listing.mlsId
    ref.child(`users/${userId}/homes/${homeId}`)
      .set(this.props.listing)
      .then(() => this.setState({ isSaved: true }))
    console.log(`${this.props.listing.address.streetName} listing saved to firebase. . . `)
  }
  render() {
    return <Home {...this.state} listing={this.props.listing} saveListing={this.saveListing} />
  }
}

export default HomeContainer
