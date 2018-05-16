import React, { Component } from 'react';
import FixedNav from '../../components/FixedNav/FixedNav.js';


class Dashboard extends Component {

    render(){
        return (
            <div>
                <FixedNav/>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;