import React, { Component } from 'react'

export default class ListingDetail extends Component {

    
    render() {
        // let theEventDetails = this.props.listingData.find((event,i) => {
        //     return event[i] === this.props.match.params.id;
        //   });
        //   let theEvent = theEventDetails;
          console.log(this.props.listingData)
        return (
            <div>
                {/* {theEvent.title} */}
            </div>
        )
    }
}
