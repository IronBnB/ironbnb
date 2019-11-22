import React, { Component } from 'react';


export default class ListingDetail extends Component {
    
    render() {


        return (
            <div className="container-fluid">
            <div className="row">
            <div className="col-6">
                <img src={this.props.img}></img>
            </div>
            <div className="col-6">
            <div>Title: {this.props.title}</div>
            <div>Price: ${this.props.price}</div>
            <div>Owner: John Johnson</div>
            <button>Request Tour</button>

            </div>
            </div>
                
            </div>
        )
    }
}
