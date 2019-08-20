import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '',
      value: 'start'
    };
    this.update=this.update.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.displayBartSelectorForm=this.displayBartSelectorForm.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
      this.setState({value:e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.budget === '' || isNaN(parseInt(this.state.budget, 10)) || this.state.value==='start') {
      return;
    }

    this.props.getBartStations(this.state.budget, this.state.value);

  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  displayBartSelectorForm() {
        return (
          <select style={{marginTop: 250 + "px"}} value = {this.state.value} onChange = {this.handleChange}>
             <option value="start" disabled>Choose starting point</option>
             <option value="16TH">16th St. Mission</option>
             <option value="12TH">12th St. Oakland City Center</option>
             <option value="19TH">19th St. Oakland</option>
             <option value="24TH">24th St. Mission</option>
             <option value="ANTC">Antioch</option>
             <option value="ASHB">Ashby</option>
             <option value="BALB">Balboa Park</option>
             <option value="BAYF">Bay Fair</option>
             <option value="CAST">Castro Valley</option>
             <option value="CIVC">Civic Center/UN Plaza</option>
             <option value="COLS">Coliseum</option>
             <option value="COLM">Colma</option>
             <option value="CONC">Concord</option>
             <option value="DALY">Daly City</option>
             <option value="DBRK">Downtown Berkeley</option>
             <option value="DUBL">Dublin/Pleasanton</option>
             <option value="DELN">El Cerrito del Norte</option>
             <option value="PLZA">El Cerrito Plaza</option>
             <option value="EMBR">Embarcadero</option>
             <option value="FRMT">Fremont</option>
             <option value="FTVL">Fruitvale</option>
             <option value="GLEN">Glen Park</option>
             <option value="HAYW">Hayward</option>
             <option value="LAFY">Lafayette</option>
             <option value="LAKE">Lake Merritt</option>
             <option value="MCAR">MacArthur</option>
             <option value="MLBR">Millbrae</option>
             <option value="MONT">Montgomery St.</option>
             <option value="NBRK">North Berkeley</option>
             <option value="NCON">North Concord/Martinez</option>
             <option value="OAKL">Oakland International Airport</option>
             <option value="ORIN">Orinda</option>
             <option value="PITT">Pittsburg/Bay Point</option>
             <option value="PCTR">Pittsburg Center</option>
             <option value="PHIL">Pleasant Hill/Contra Costa Centre</option>
             <option value="POWL">Powell St.</option>
             <option value="RICH">Richmond</option>
             <option value="ROCK">Rockridge</option>
             <option value="SBRN">San Bruno</option>
             <option value="SFIA">San Francisco International Airport</option>
             <option value="SANL">San Leandro</option>
             <option value="SHAY">South Hayward</option>
             <option value="SSAN">South San Francisco</option>
             <option value="UCTY">Union City</option>
             <option value="WCRK">Walnut Creek</option>
             <option value="WARM">Warm Springs/South Fremont</option>
             <option value="WDUB">West Dublin/Pleasanton</option>
             <option value="WOAK">West Oakland</option>
          </select>
        );
  }



  render() {

    const bartSelector = this.displayBartSelectorForm();
    return (
      <div>
        <form className='budget'>
        {bartSelector}
        <div className="budget_and_go_button">
          <input className='budget'  type = "text" onChange={this.update("budget")} value={this.state.budget} placeholder="Budget" />
          <button className="go-btn" onClick={this.handleSubmit}>GO</button>
        </div>
       </form>

      </div>
    );
    }
}

export default Search;
