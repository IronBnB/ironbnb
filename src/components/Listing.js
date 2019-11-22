import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Listing extends Component {
  showListing = () => {
    return this.props.listingData.map((eachListing, i) => {
      return (
        <div className="container" key={i}>
          <div className="listing-info">
          <img src={eachListing.img[1]} alt="House" />
            <h4>{eachListing.title}</h4>
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
