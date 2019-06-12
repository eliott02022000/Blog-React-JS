import React, { Component } from 'react'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import api from '../Services/Api'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password_verif: "",
        };    
    }

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }
  
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 7 && this.state.firstname.length > 0 && this.state.lastname.length > 0 && this.state.password_verif.length > 7;
    }

    render() {
        if (this.state.redirect === true) {
            return (<Redirect to="/Articles" />)
        } else {
            return (
                <div className="Register">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="firstname">
                            <FormLabel>Firstname</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="lastname">
                            <FormLabel>Lastname</FormLabel>
                            <FormControl
                            value={this.state.lastname}
                            onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup>
                        <FormGroup controlId="email">
                            <FormLabel>Email</FormLabel>
                            <FormControl
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormLabel>Password</FormLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup>
                        <FormGroup controlId="password_verif">
                            <FormLabel>Password Verification</FormLabel>
                            <FormControl
                            value={this.state.password_verif}
                            onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup>
                        <Button
                            block 
                            disabled={!this.validateForm()}
                            onClick={() => {
                                api.apiregister(this.state.firstname, this.state.lastname, this.state.email, this.state.password, this.state.password_verif, (data) => {
                                    console.log(data)
                                    if (data.status === 201) {
                                        api.apilogin(this.state.email, this.state.password, (data) => {
                                            if (data.status === 200) {
                                                this.setState({
                                                    redirect: true
                                                })
                                            }
                                        })
                                    }
                                })
                            }}
                            type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            )
        }
    }
}
