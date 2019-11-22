import React, { Component } from './node_modules/react'
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import ListingDetail from "./ListingDetail"

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

        
        <Switch>
        <Route exact path="/listing/listingdetail/:id" render ={ props => 
      <ListingDetail 
       {...props}
       selectedListingProp = {this.state.selectedListing}
        /> } />
      </Switch>


            </div>
        )
    }
}
