import { connect } from 'react-redux';
import NavBar from './nav_bar.jsx';
import { logoutUser } from '../../util/session_api_util';

const mapStateToProps = state => {
  return {
    currentUser: state.session.name
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);
