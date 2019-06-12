import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import api from '../Services/Api';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
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
    return this.state.email.length > 0 && this.state.password.length > 7;
  }

  render() {

    if (this.state.redirect === true) {
      return (<Redirect to="/Articles" />)
    } else {
      return (
        <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block 
            disabled={!this.validateForm()}
            onClick={() => {
              api.apilogin(this.state.email, this.state.password, (data) => {
                if (data.status === 200) {
                  this.setState({
                    redirect: true
                  })
                }
              })
            }}
            type="submit">
            Login
          </Button>
        </form>
        
      </div>
      )
    }
  }
}
