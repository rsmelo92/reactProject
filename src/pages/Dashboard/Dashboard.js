import React, { Component } from 'react';
import FixedNav from '../../components/FixedNav/FixedNav.js';
import Grid from '../../components/Grid/Grid.js';


class Dashboard extends Component {

    render(){
        return (
            <div>
                <FixedNav />
                <Grid />
            </div>
        )
    }
}

export default Dashboard;