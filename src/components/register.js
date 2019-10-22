import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../actions/authactions';
import {Link} from 'react-router-dom'

class Register extends Component {
   state={
    UserName:'',
    email:'',
    password:''

   }
   static propTypes={
    isAuthenticated:PropTypes.bool,
    error:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
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
    const {UserName,email,password} = this.state;
    const newUser={
        UserName,
        email,
        password
    }

    console.log(newUser)

    this.props.register(newUser);

   }

    render() {
    const {UserName,email,password}=this.state;

        return (
            <div className="col-md-6 m-auto">
              <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>


                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label className="float-left"><strong>Username</strong></label>
                    <input
                      type="text"
                      className="form-control"
                      name="UserName"
                      onChange={this.onChange}
                      value={UserName}
                    />
                  </div>
                <div className="form-group">
                    <label className="float-left"><strong>Email</strong></label>

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
                      Register
                  </button>
                  <p>
                    Already have an account? <Link to="/">Login</Link>
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


export default connect(mapStateToProps,{register})(Register);