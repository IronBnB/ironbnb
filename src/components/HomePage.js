import React, { Component } from "react";
import Listing from "./Listing";
import "bootstrap/dist/css/bootstrap.min.css";
import GoogleMapReact from "google-map-react";
import Marker from './Marker'

export default class HomePage extends Component {
  state = {
    center: {
      lat: 25.7617,
      lng: -80.1918
    },
    zoom: 10
  };
  render() {
    return (
      <div className="homepage">
        <div className="col-5">
          <GoogleMapReact className="map"
            style={{ height: "100px", width: "100px" }}
            bootstrapURLKeys={{
              key: "AIzaSyDZiBSkaZztK2mN3Q8QzvzcfPCsDX2_p58"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            {/* {this.showParks()} */}
            <Marker
              lat="25.7617"
              lng="-80.1918"
            />
          </GoogleMapReact>
        </div>
        <div className="col-7">
          <Listing listingData={this.props.listingData} />
        </div>
      </div>
    );
  }
}
