import {GET_ERRORS} from './types';

// CLEAR_ERRORS

export const returnErrors=(msg,status,id=null)=>{
	return{
		type:GET_ERRORS,
		payload:{msg,status,id}
	}
}

export const clearErrors=()=>{
	return{
		type:clearErrors
	}
}