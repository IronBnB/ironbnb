import React, { Component } from "react";
import DataJson from "./data.json";
import Listing from "./components/Listing";
import Home from "./components/HomePage";
import { Switch, Route, Link } from "react-router-dom";
import ListingDetail from './components/ListingDetail'
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  state = {
    data: DataJson
  };

  render() {
    // console.log(this.state.data);
    return (
      <div>
        {/* <Listing listingData={this.state.data} /> */}
        <Link to="/">HomePage</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                listingData={this.state.data}
              />
            )}
          />
          <Route
            exact
            path="/listingdetail/:id"
            render={props => (
              <ListingDetail
                {...props}
                listingData={this.state.data}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
