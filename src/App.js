import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import Route from 'react-router-dom/Route'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact strict render={
            ()=>{
              return (<h1>Hello World!</h1>)
            }
          }/>
          <Route path="/about" exact strict render={
            ()=>{
              return (<h1>About</h1>)
            }
          }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
