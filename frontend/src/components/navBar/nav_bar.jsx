import React from 'react';
import {Link} from 'react-router-dom';
import '../../style/test.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayCorrectSessionButton=this.displayCorrectSessionButton.bind(this);
  }

  displayCorrectSessionButton() {
    if(this.props.currentUser===undefined) {
      return <div className="sessionLinks">

            <Link className="login-btn" to="/login">Log in</Link>

          <div className='or' ></div>
          <Link className="signup-btn" to="/signup">
            Sign Up
          </Link>
          {/* <br/> */}
        {/* <span className='arrow'> => </span> */}
        {/* <span className='attractions'>to see the attractions nearby</span> */}
        </div>;
    } else {
      return (
        <div className='greeting'>
          <h1 className='current-user' >Hello, {this.props.currentUser}</h1>
            <button className='logout-button' onClick= {this.props.logoutUser}>Log out</button>
        </div>
      );
    }
  }


  render() {
    const displayLinks = this.displayCorrectSessionButton();
    return <div className="nav-bar">
        {/* <img className="bc-logo" src="http://sohanews.sohacdn.com/k:2016/1-1452151932916/tg-dang-co-thoi-co-vang-de-cho-trieu-tien-biet-ho-da-tinh-sai.jpg" alt="" /> */}

      <div className='header'><Link className='bart-ventures-link' to="/">
        <div className='bart-venture'>Bart Ventures</div>
          {/* <h1 className="header">Bart Ventures</h1> */}
        </Link>
      </div>
        {displayLinks}
      </div>;
  }
}

export default NavBar;
