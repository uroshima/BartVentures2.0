import React from 'react';

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.getAttraction = this.getAttraction.bind(this);
  }

  getAttraction(loc) {

    for(let i = 0 ; i < this.props.attractions.length ; i++) {
      let currentAttraction = this.props.attractions[i];

      if(loc.lat === currentAttraction.lat && loc.lng === currentAttraction.lng) {

        return currentAttraction;
      }
    }
  }




  render() {

    let displayAttractions = this.props.attractions.map( (attr,idx) => {
      return (
        <div key = {idx} className="displayAttractions">
          <p className="attractions-name">{attr.name}</p>
            <img className="all-attraction-photos" src={ attr.image } alt=""/>
            <p className="attractions-desc">{attr.description}</p>
            <br></br><br></br>
        </div>
      );
    });


    let currentAttraction = this.getAttraction(this.props.display);
    if (this.props.display.length !== 0 && currentAttraction!==undefined) {
      displayAttractions =
      <div>
        <button onClick={this.props.deleteDisplay}>Back</button>
        <div className="displayAttractions">
          <p className="attractions-name">{currentAttraction.name}</p>
            <img className="all-attraction-photos" src={ currentAttraction.image } alt=""/>
              <p className="attractions-desc">{currentAttraction.description}</p>
          <br></br><br></br>
        </div>
      </div>
    }




    return (
      <div className="attractions-body">
          <div className="attractions-header">
          Places to <div className="attractions-explore"> Explore</div>
          </div>
          <div>
            <ul className="test-list">
                {displayAttractions}
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
