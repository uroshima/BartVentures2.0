import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: '',
      name:''
    };
    if(this.props.formType === 'login') {
      this.state = {
        email: '',
        password:''
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update=this.update.bind(this);
    this.displaySignUpForms = this.displaySignUpForms.bind(this);
    this.displayErrors=this.displayErrors.bind(this);
  }

  update(e,field) {
    e.preventDefault();
    this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  displaySignUpForms() {
    if(this.props.formType === 'signup') {
      return (
        <div className='signup-group'>
          <label>
            {/* Enter Name: */}
              <input placeholder='First Name' type="text" value = {this.state.name} onChange={(e)=>this.update(e,"name")} />
          </label>
          <br/>
          <label>
              {/* Repeat Password: */}
              <input placeholder='Repeat Password' type="password" value = {this.state.password2} onChange={(e)=>this.update(e,"password2")} />
          </label>
        </div>
      );
    }
  }

  displayErrors() {
    return (
      <div>
        {this.props.errors.map( (err,idx) => {
           return (<ul key={idx}>{err}</ul>)
        })}
      </div>
    );
  }



  render() {
    const display = this.displaySignUpForms();
    const error = this.displayErrors();
    return (
      <div>
        <div className='login-group' >
        <form onSubmit={this.handleSubmit}>
        <label>
            {/* Enter Email: */}
            <input type="text" placeholder='Email' value = {this.state.email} onChange={(e)=>this.update(e,"email")}/>
        </label>
        <br/>
        <label>
            {/* Enter Password: */}
              <input type="password" placeholder='Password'  value = {this.state.password} onChange={(e)=>this.update(e,"password")} />
        </label>
          <br/>
          {display}
          {error}
        <input type="submit" value={this.props.buttonText} />
        </form>
        {this.props.navLink}
        </div>



      </div>
    )
  }
}

export default withRouter(SessionForm);
