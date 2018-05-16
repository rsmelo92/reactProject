import React, { Component } from 'react';
import { Route, 
  // Redirect 
} from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Dashboard from './pages/Dashboard/Dashboard.js';

class RoutesCentral extends Component {
  state = {
    loggedIn:false
  }
  loginHandle = ()=>{
    this.setState({loggedIn:true})
  }
  render() {
    return (
        <div className="routes-holder">

          <Route path="/" exact strict render={
            ()=>{
              return (<Home/>)
            }
          }/>
          
          <Route path="/dashboard" exact strict render={
            ()=>{
              return (<Dashboard/>)
            }
          }/>

        </div>
    );
  }
}

export default RoutesCentral;
