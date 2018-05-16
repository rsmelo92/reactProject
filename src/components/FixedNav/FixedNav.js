import React, { Component } from 'react';
import './FixedNav.css';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';
import eskolareLogo from './eskolare.png';

class FixedNav extends Component {
    state = {
        loggedIn:localStorage.getItem('loggedIn')
    }
    logout = ()=>{
        localStorage.setItem('loggedIn', false);
        this.setState({loggedIn:localStorage.getItem('loggedIn')});
    }
    redirect = ()=>{
        if (this.state.loggedIn==='false') { return true; }
    }
    render(){
        return(
            <nav className="fixed-top-nav container-fluid">
                {/* {this.redirect()} */}
                {this.redirect() && (<Redirect to='/'/>)}
                <div className="nav-top row">
                    <div className="logo-nav-holder col-2">
                        <img className="logo-nav" src={eskolareLogo} alt="eskolare logo"/>
                    </div>
                    <ul className="nav-menu-list col-10">
                        <li><Button color="link" onClick={this.logout}>Logout</Button></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default FixedNav;