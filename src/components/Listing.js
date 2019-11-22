import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

export default class Listing extends Component {
  showListing = () => {
    return this.props.listingData.map((eachListing, i) => {
      return (
        <div className="listing" key={i}>
          <div className="listing-img">
          <img src={eachListing.img[1]} alt="House" />
            <h4><Link to={'/listingdetail/'+eachListing.img[0]}>{eachListing.title}</Link></h4>
            <p>{eachListing.link}</p>
            <p>$ 1,1000</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div>{this.showListing()}</div>;
  }
}
