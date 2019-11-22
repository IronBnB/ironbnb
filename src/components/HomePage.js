import React, { Component } from "react";
import Listing from "./Listing";
import "bootstrap/dist/css/bootstrap.min.css";
// import GoogleMapReact from "google-map-react";
// import Marker from "./Marker";
// import MapImg from "../images/googlemap.jpeg"

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
      <div className="">
        <div className="map" >
        <br/> <br/> <br/> <br/> <br/>
          {/* <GoogleMapReact
            style={{ height: "100px", width: "50%" }}
            bootstrapURLKeys={{
              key: "AIzaSyDZiBSkaZztK2mN3Q8QzvzcfPCsDX2_p58"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
          
             <Marker
              lat="25.7617"
              lng="-80.1918"
            /> 
          </GoogleMapReact> */}
        </div>
        <div className="">
          <div className="flex-row  text-center">
            <button className="btn btn-outline-dark">For Sale</button>
            <button className="btn btn-outline-dark">Price</button>
            <button className="btn btn-outline-dark">Type</button>
            
          </div>
          <Listing listingData={this.props.listingData} />
        </div>
      </div>
    );
  }
}
