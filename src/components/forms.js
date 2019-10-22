import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLead} from '../actions/leads';

class Form extends Component {
    // const {user}=this.props.auth;

    state={
        text:'',
        flag:false,
        author:this.props.auth.user.UserName,
               
    };
    static propTypes = {
        addLead:PropTypes.func.isRequired,
        auth:PropTypes.object.isRequired

    }
    onChange=e=> this.setState({ [e.target.name]:e.target.value });
    onSubmit=e=>{
        e.preventDefault();
        const {text,author} = this.state;
        const lead = {text,author}
        this.props.addLead(lead);
        // console.log(this.state)

        e.target.elements.text.value='';

    }
    // handletoggle=this.props.data
    // handletoggle(e){
    //     this.setState({type:"input"})
    // }
    render() {
        const {text} = this.state;

        return (
            <div>
                <div className="mt-4 mb-4">
                   
                    <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                        <div class="row">
                            <div class="col">
                            <input type="text" name='text' value={text} className="form-control" placeholder="What Are You Feeling....." onChange={this.onChange} required='true' />
                            <button type="submit" className="btn btn-primary btn-sm mt-3">Create Post</button>
                            
                            
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps= state=>({
    auth:state.auth
})


export default connect(mapStateToProps,{addLead})(Form);