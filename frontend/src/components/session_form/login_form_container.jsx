import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser,clearError } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    errors: state.error,
    formType: 'login',
    navLink: <Link className='alternative-button' to="/signup">sign up instead</Link>,
    buttonText: 'Log in'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
