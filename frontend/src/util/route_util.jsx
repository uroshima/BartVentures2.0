import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/"></Redirect>
        )
    )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <div>&nbsp;Please&nbsp;
        <Link to="/login">Log In</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign Up</Link>
        </div>
      )
    )}/>
);

const mapStateToProps = (state) => {
  return {loggedIn: Boolean(state.session.id)}
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
