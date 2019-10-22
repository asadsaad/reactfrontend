import { combineReducers } from 'redux';
import leads from './leads';
import errorreducer from './errorreducer';
import authreducer from './authreducer';




export default combineReducers({
    leads,
    error:errorreducer,
    auth:authreducer
});