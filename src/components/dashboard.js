import React from 'react'
// import Form from './forms'
import Leads from './leads'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import Register from './register'
import Login from './login'
import {Route} from 'react-router-dom'
import Update from './update'


class Dashboard extends React.Component{
	static propTypes={
    auth:PropTypes.object.isRequired
   }
   render(){
   const {isAuthenticated}=this.props.auth;
    return (
        <div className="container">
        	{isAuthenticated ? 
              <div>
               <Route exact path='/' component={Leads} />
                <Route exact path='/register' component={Leads} />
                <Route path='/:post_id' component={Update} />

                </div>


                :
                <div>
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} /></div>


            }


        </div>
    )
}
}




const mapStateToProps= state=>({
    auth:state.auth
})

export default connect(mapStateToProps,null)(Dashboard)