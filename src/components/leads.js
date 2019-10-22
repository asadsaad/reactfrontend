import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getLeads,deleteLead,updateLead} from '../actions/leads'
import { Link } from 'react-router-dom';
import Form from './forms'
import moment from 'moment'
// import Update from './update'

 class Leads extends Component {
    constructor(props){
        super(props);
        this.state={
            isedit:false,
            // comments:null
        }
    }



    static propTypes = {
        leads:PropTypes.array.isRequired,
        getLeads:PropTypes.func.isRequired,
        deleteLead:PropTypes.func.isRequired,
        updateLead:PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired



    };
    componentDidMount(){
        this.props.getLeads();
    }
    componentWillMount(){
        this.props.getLeads();
    }


    render() {
        const {user}=this.props.auth;

        return (
            <div>
             <Form />        
                

                <h2 className="mb-2">Tweets</h2>
                        {this.props.leads.map(post=>(
                            <div className="card mt-2">

                                 <div className="row card-body">
                                    <div className="col-md text-left" key={post._id}>
                                    {post.text} | by <strong>{post.author}</strong> {post._id}| {moment(post.created_at).fromNow()}
                                       

                                    </div>                                   
                                    {user.UserName === post.author ? <div className="text-left"><button onClick={this.props.deleteLead.bind(this,post._id)} className='btn btn-danger btn-sm float-right ml-2'>Delete</button>
                                    <Link to={post._id} className='btn btn-primary btn-sm float-right ml-2'>Edit</Link></div>



                                     : ""}

                                    

                                    
                                        

                                    
                                    
                                    

                                    

                            </div>
                            </div>


                        ))}    

            </div>
                     
                    
                        
                 
            
        )
    }
}

const mapStateToProps=state=>({
    leads:state.leads.leads,
    auth:state.auth

})

export default connect(mapStateToProps,{getLeads,deleteLead,updateLead})(Leads);