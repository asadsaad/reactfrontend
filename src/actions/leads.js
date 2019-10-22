import axios from 'axios';
import {GET_LEADS,DELETE_LEAD,ADD_LEAD,UPDATE_LEAD} from './types';



export const getLeads=()=> dispatch=>{
    axios.get('http://localhost:4000/posts/')
        .then(res=>{
            dispatch({
                type:GET_LEADS,
                payload:res.data
            })
        }).catch(err=>console.log(err));

}

export const deleteLead=(id)=> dispatch=>{
    axios.delete(`http://localhost:4000/delete-post/${id}/`)
        .then(res=>{
            dispatch({
                type:DELETE_LEAD,
                payload:id
            })
        }).catch(err=>console.log(err));

}

export const addLead=(lead)=> dispatch=>{
    console.log(lead)
    axios.post('http://localhost:4000/create-post',lead)
        .then(res=>{
            dispatch({
                type:ADD_LEAD,
                payload:res.data
            })
        }).catch(err=>console.log(err));

}

export const updateLead=(lead,id)=> dispatch=>{
    axios.put('http://localhost:4000/update-post/${id}',lead)
        .then(res=>{
            dispatch({
                type:UPDATE_LEAD,
                payload:res.data
            })
        }).catch(err=>console.log(err));

}
