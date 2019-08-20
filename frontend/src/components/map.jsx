import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

class BartMap extends React.Component {
    render() {

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }
            >
            </GoogleMap>
        ))
        return (
           <div className="map" ref="map">
            Is Map Showing
        <GoogleMapExample containerElement={ <div style={{ height: `980px`, width:'750px'}}/> } mapElement={ <div style={{height: `100%`}} />}
          />
            </div>


        );
    }
}

export default BartMap;
