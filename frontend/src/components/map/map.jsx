import React from 'react';
import { withGoogleMap, GoogleMap , Marker } from 'react-google-maps';

class BartMap extends React.Component {
    constructor(props) {
      super(props);
      let centerOfMap = this.props.center;
      this.state = {
          center: centerOfMap,
          zoom: 13
      };
    }

    render() {
        let that = this;
        if (this.props.center === undefined || this.props.center.length === 0) {
          this.centerOfMap =  {
              lat: 37.773972,
              lng: -122.431297
          };
          this.mapZoom= 10;

        } else {
        
          this.centerOfMap = {
            lat: this.props.center.lat,
            lng: this.props.center.lng
          };
          this.mapZoom= 13;
        }

        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { this.centerOfMap }
            defaultZoom = { this.mapZoom }>


            { this.props.bartMarkers.map((bart, index)=> {
              let loc = { lat: bart.lat, lng: bart.lng};
        return (
          <Marker
            key={index+"bart"}
            options= {{icon: 'http://maps.google.com/mapfiles/marker_green.png'}}
            position={loc}
            title= {bart.name}
          />
        )
      })}


      { this.props.attractionMarkers.map((attr, index)=> {
        let loc = {lat: attr.lat, lng: attr.lng};
        return (
          <Marker
            key={index+"attr"}
            position={loc}
            title= {attr.name}
            onClick= {()=>that.props.fetchDisplay(loc)}
          />

        )
      })}


            </ GoogleMap>
        ))

        return (
            <div className="map-container" ref="map">
                <GoogleMapExample className='google-map'
                            containerElement={<div className='map' style={{ width: `64%`, height: `87.5%`}}/> }
                            mapElement={ <div style={{height: `100%`}}/>}

                />
                <span className='disclaimer'>Bart Venture doesn't speak for Bart, and the sole purpose of this app is to provide
                    people with information on where a certain budget can get you to by Bart.
                </span>
            </div>
        );
    }
}
export default BartMap;