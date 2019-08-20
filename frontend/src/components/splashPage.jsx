import React from 'react';
import BartMap from './map/map.jsx';
import Search from './search/search.jsx';
import Attractions from './attractions/attractions.jsx';

class SplashPage extends React.Component {

  //default to get all bart st
  componentDidMount() {
    this.props.getBartStations(100, "16TH");
  }

  render() {
    return  (
      <div>
        <Search getBartStations={this.props.getBartStations} getAllBartStations={this.props.allBarts} loc={this.props.coords} clearErrors={this.props.clearErrors} deleteDisplay= {this.props.deleteDisplay}/>
        <BartMap location={this.props.allBartStations} center={this.props.displayed} bartMarkers ={this.props.bart} attractionMarkers={this.props.attractions} fetchDisplay={this.props.fetchMarkerAttraction} />
        <Attractions attractions={this.props.attractions} display = {this.props.displayed} deleteDisplay = {this.props.deleteDisplay}/>
      </div>
    )
  }
}

export default SplashPage;
