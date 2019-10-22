import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header';
import Dashboard from './components/dashboard';
// import { Match } from 'react-router-dom';
import {loadUser} from './actions/authactions';
// import Update from './components/update'
import {BrowserRouter} from 'react-router-dom'



// import dashboard from './components/dashboard';

class App extends React.Component{
  componentDidMount(){
    store.dispatch(loadUser());
  }
  
  render(){
    

  return (

    <Provider store={store}>
      <BrowserRouter>

      <div className="App">
        <Header />
        <Dashboard />

        
        
            
      </div>
      </BrowserRouter>
    </Provider>
  );
}



}

export default App;

