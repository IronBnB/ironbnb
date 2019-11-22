import React, { Component } from './node_modules/react'
import MapMarker from '../images/park-map.png'

export default class Marker extends Component {
    render() {
        return (
            <div>
                <img src={MapMarker} alt="Marker" />
            </div>
        )
    }
}
