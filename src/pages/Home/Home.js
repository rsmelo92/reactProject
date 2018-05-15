import React, { Component } from 'react';
import './Home.css';
import LoginBox from '../../components/LoginBox/LoginBox.js';

class Home extends Component {
    render(){
        return (
            <div className="section-home">
                <LoginBox/>
            </div>
        )
    }
}

export default Home;