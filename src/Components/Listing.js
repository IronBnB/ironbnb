import React, { Component } from 'react'
import ListingDetail from './ListingDetail';
import {Link, Switch, Route} from "react-router-dom";

export default class Listing extends Component {

    state = {
      selectedListing: []
    }

    setStateListing = (e) => {
      return (
        this.setState({
          selectedListing: e.target.value
        })
      )

    }


    showListing = () => {
        return this.props.listingData.map(( eachListing,i)=> {
          return (
            <div className="listing" key={i}>
            <h3>{eachListing.title}</h3>
            <Link to="/" onClick={(e) => this.setStateListing(e)}>{eachListing.link}</Link>
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
