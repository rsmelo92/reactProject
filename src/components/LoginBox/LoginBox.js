import React, { Component } from 'react';
import eskolareLogo from './eskolare.png';
import './LoginBox.css';
import { Redirect } from 'react-router';
import { Button } from 'reactstrap';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

class LoginBox extends Component {
    state = {
        loggedIn:localStorage.getItem('loggedIn')
    }
    responseFacebook = (response) => {
        if (response.accessToken) {
            console.log(response.accessToken)
            localStorage.setItem('loggedIn', true);
            this.setState({loggedIn:localStorage.getItem('loggedIn')});
        }
    }
    responseGoogle = (response) => {
        if (response.accessToken) {
            console.log(response.accessToken)
            localStorage.setItem('loggedIn', true);
            this.setState({loggedIn:localStorage.getItem('loggedIn')});
        }
    }
    render(){
        const redirect = this.state.loggedIn;
        console.log("redirect", redirect)
        return(
            <section className="section-login-box container">
                
                {redirect==="true" && (<Redirect to='/dashboard'/>)}

                <div className="login-holder align-items-center row">
                    <div className="login-box">

                        <div className="login-logo-holder col-12">
                            <img className="login-logo" src={eskolareLogo} alt=""/>
                        </div>
                        <div className="login-box-form">
                            <div className="btn-social-login-holder col-12">
                                <FacebookLogin
                                    appId="228989214537025"
                                    callback={this.responseFacebook}
                                    render={renderProps => (
                                        <Button className="btn-social-login" color="primary" onClick={renderProps.onClick}>Entrar com Facebook</Button>
                                    )}
                                />
                                <GoogleLogin
                                    clientId="335412301478-1q0ei5et7tm03qbe8l1897tijrj1f2c0.apps.googleusercontent.com"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    style={{background:'transparent',border:'none', padding:0}}
                                >
                                    <Button className="btn-social-login" color="danger">Entrar com Google+</Button>
                                </GoogleLogin>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default LoginBox;