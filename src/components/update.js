import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateLead} from '../actions/leads';
import axios from 'axios'
// import {Redirect} from 'react-router-dom'

class Update extends Component {
    state={
        text:'',
        author:''
        
    };
    componentDidMount(){
        // console.log(this.props);
        let id=this.props.match.params.post_id; 

        console.log(id)
        axios.get(`http://localhost:4000/post/${id}`)
            .then(res=>{
                    this.setState({
                    text:res.data[0].text,
                    author:res.data[0].author,


                })
            })
        
    }
    static propTypes = {
        updateLEAD:PropTypes.func.isRequired
    }
    onChange=e=> {this.setState({ [e.target.name]:e.target.value })



    }
    onSubmit=e=>{
        e.preventDefault();
        const {text,author} = this.state;
        let id=this.props.match.params.post_id;
        
        const lead = {text,author}
        // this.props.updateLead(lead,id);
        fetch(`http://localhost:4000/update-post/${id}/`, {
            method: 'put',
            body: JSON.stringify(lead),
            headers: {
              "Content-type": "application/json"
            },
          }).then(res => res.json())
            this.props.history.push('/')


        }
        // console.log(this.props.id)
        // e.target.elements.text.value='';

    // var submitupdate = this.props.onsubmit;
    render() {
        const {text} = this.state;
        return (
            <div>
                <div className="mt-4 mb-4">
                   
                    <form onSubmit={this.onSubmit}>
                        <div class="row">
                            <div class="col">
                            <input type="text" name='text' value={text} class="form-control" placeholder="What Are You Feeling....." onChange={this.onChange}/>
                            <button type="submit" className="btn btn-primary btn-sm mt-3">Update Post</button>

                            
                            
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state,props){
//     if (props.leads){
//         return{
//             lead:state.leads.find(post=>post._id===props.lead._id)
//         }
//     }

// }

// export default Update;

export default connect(null,{updateLead})(Update);