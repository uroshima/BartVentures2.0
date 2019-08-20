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
        </div>;
    } else {
      let firstName = this.props.currentUser.split(' ');
      firstName = firstName[0];
      return (
        <div className='sessionLinks'>
          <h1 className='current-user' >{firstName}</h1>
            <button className='logout-button' onClick= {this.props.logoutUser}>Log out</button>
        </div>
      );
    }
  }


  render() {
    const displayLinks = this.displayCorrectSessionButton();
    return <div className="nav-bar">
              <div className='header'>
                <Link className='bart-ventures-link' to="/">
                  <div className='bart-venture'>Bart Ventures</div>
                </Link>
              </div>
              {displayLinks}
           </div>;
  }
}

export default NavBar;
