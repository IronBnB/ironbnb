import React, { Component } from 'react'
import DataJson from './data.json'
import Listing from './Listing/Listing'

export default class App extends Component {

  state = {
    data: DataJson,
  }


  
  render() {
    console.log(this.state.data)
    return (
      <div>
        <Listing listingData={this.state.data} />
      </div>
    )
  }
}
