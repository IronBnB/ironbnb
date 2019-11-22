import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default class Listing extends Component {

    showListing = () => {
        return this.props.listingData.map(( eachListing,i)=> {
          return (
            <div className="listing" key={i}>
            <h3>{eachListing.title}</h3>
            <h5>{eachListing.link}</h5>
            <p></p>
            </div>
          )
        })
      }
    render() {
        return (
            <div>
                
        {this.showListing()}
            </div>
        )
    }
}
