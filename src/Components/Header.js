import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import "../style/header.css"
import api from "../Services/Api"


export default class Header extends Component {

    displaylogin() {
        console.log(api.isLogged)
        if (api.isLogged()) {
            return(
                <div>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand">MyBlog</a>
                            </div>

                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/Articles">Home</a></li>
                                <li><NavLink to="/Articles">Articles</NavLink></li>
                                <li><NavLink to="/Createarticles">Create New Articles</NavLink></li>
                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                            <li> <NavLink to="/User">My info</NavLink></li>
                            <li><a onClick = {() => {
                                api.apilogout()
                            }}> <NavLink to="/Articles">Log Out</NavLink></a></li>

                            </ul>

                        </div>
                    </nav>
                </div>
            )
        } else {
            return(
                <div>
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <a class="navbar-brand" >MyBlog</a>
                            </div>

                            <ul class="nav navbar-nav">
                                <li class="active"><a href="/Articles">Home</a></li>
                                <li><a><NavLink to="/Articles">Articles</NavLink></a></li>
                            </ul>

                            <ul class="nav navbar-nav navbar-right">
                                <li><a><span class="glyphicon glyphicon-user"></span> <NavLink to="/Register">Sign up</NavLink></a></li>
                                <li><a><span class="glyphicon glyphicon-log-in"></span> <NavLink to="/login">Login</NavLink></a></li>
                            </ul>

                        </div>
                    </nav>
                </div>
            )
        }
    }
  
    render() {
        return (
            <div>
                {this.displaylogin()}
            </div>
        ) 
    }
  }
  
  