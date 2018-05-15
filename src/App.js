import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import RoutesCentral from './RoutesCentral.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <RoutesCentral/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
