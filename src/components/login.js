import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/authactions';
import {Link} from 'react-router-dom'

class Login extends Component {
   state={
    email:'',
    password:'',

   }
   static propTypes={
    isAuthenticated:PropTypes.bool,
    error:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
   }
   // componentDitUpdate(prevProps){
   //  const {error}=this.props;
   //  if (error !== prevProps.error) {
   //      if (error.id=="REGISTER_FAIL") {
   //          this.setState({msg:error.msg.data.msg})
   //      }
        
   //      else{
   //          this.setState({
   //              msg:null
   //       })


            
        
   //      }
   //      }
   //  }
   onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
   }
   onSubmit=(e)=>{
    e.preventDefault()
    const {email,password} = this.state;
    const User={
        email,
        password
    }

    // console.log(newUser)

    this.props.login(User);

   }

    render() {
    const {email,password}=this.state;

        return (
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>


                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="float-left"><strong>Username</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={this.onChange}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label className="float-left"><strong>Password</strong></label>
                    
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                    />
                  </div>  

                  <button type="submit" className="btn btn-primary">
                      Login
                  </button>
                  <p>
                    Not Have An Account? <Link to="/Register">Register</Link>
                  </p>
                </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error
})


export default connect(mapStateToProps,{login})(Login);