import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authactions'
// import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class Logout extends React.Component{
	static propTypes={
		logout:PropTypes.func.isRequired
	}
  render(){
  return (
   <div>
   		<button className="btn btn-primary" onClick={this.props.logout}>  Logout</button>



   </div>
  );
}
}

export default connect(null,{logout})(Logout);