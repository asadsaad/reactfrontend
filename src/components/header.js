import React, { Component } from 'react'
import Logout from './logout'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class Header extends Component {
    static propTypes={
    auth:PropTypes.object.isRequired
   }
    render() {
        const {isAuthenticated,user}=this.props.auth;
        const authLinks =(
           // <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
           //      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           //      <li className="nav-item active">
           //          <Logout />
           //      </li>
           //      <li className="nav-item">
           //          <strong className="ml-3">{user ? `welcome ${user.UserName}` : "" }</strong>
           //      </li>
               
           //    </ul>

           //  </div>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <span className="navbar-text mr-3">
                  <strong>{user ? `Welcome ${user.UserName}` : ""}</strong>
                </span>
                <li className="nav-item">
                  <Logout />
                </li>
            </ul>
            )
        const gustLinks =(

            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Login
                  </Link>
                </li>
            </ul>


        )
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link className="navbar-brand" to="/">
                          Tweepy
                        </Link>
                      </div>
                      {isAuthenticated ? authLinks : gustLinks}
                    </div>
                </nav>
                      
        </div>
        )
    }
}

const mapStateToProps= state=>({
    auth:state.auth
})

export default connect(mapStateToProps,null)(Header)
