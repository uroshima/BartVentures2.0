// frontend/src/components/session_form/signup_form_container.js

import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser, clearError } from '../../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = (state) => {

  return {
    errors : state.error,
    formType: 'signup',
    navLink : <Link to ='/login'>Log in instead</Link>,
    buttonText: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
    clearErrors: () => dispatch(clearError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
