import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import login from './Components/login';
import Register from './Components/Register';
import Articles from './Components/Articles';
import Article from './Components/Article';
import Createarticles from './Components/Createarticles';

import Header from './Components/Header';
import User from './Components/User';
import "./style/register.css";
import "./style/login.css";
import { NavLink } from 'react-router-dom'


export default class App extends Component {
  
  render() {
    return(
        <Router>
          <div>
            <Route path={`/`} component = {Header}/>
            <Route path={`/Createarticles`} component = {Createarticles}/>
            <Route path={`/Articles`} component = {Articles}/>
            <Route path={`/Article/:id`} component = {Article}/>
            <Route path={`/User`} component = {User}/>
            <Route path="/login" component={login} />
            <Route path="/Register" component={Register} />
          </div>
        </Router>
    );
  }
}


