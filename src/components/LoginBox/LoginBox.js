import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginBox.css';
import eskolareLogo from './eskolare.png';

class LoginBox extends Component {
    render(){
        return(
            <section className="section-login-box container">
                <div className="login-holder align-items-center row">
                    <div className="login-box">

                        <div className="login-logo-holder col-12">
                            <img className="login-logo" src={eskolareLogo} alt=""/>
                        </div>
                        <div className="login-box-form">
                            <div className="btn-social-login-holder col-12">
                                <Button className="btn-social-login" color="primary">Entrar com Facebook</Button>
                                <Button className="btn-social-login" color="danger">Entrar com Google+</Button>
                            </div>
                            <p>ou</p>
                            <div className="email-login-holder col-12">
                                <Form>
                                    <FormGroup>
                                        <Label for="loginEmail">Email</Label>
                                        <Input type="email" name="email" id="loginEmail" placeholder="user@eskolare.com.br"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="loginPassword">Senha</Label>
                                        <Input type="password" name="password" id="loginPassword" placeholder="********"/>
                                    </FormGroup>
                                    <Button className="btn-email-login" color="info">Entrar</Button>
                                </Form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default LoginBox;