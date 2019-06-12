import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import api from '../Services/Api';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom'


export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : "",
            firstname : "",
            lastname : "",
            created_at : "",
        };
    }

    render() {
        return(
            <div>
                <div>{
                    api.apiuser(parseInt(this.props.match.params.id), (user)=> {
                        console.log(user)
                        this.setState({
                            id : user.data.id,
                            firstname : user.data.firstname,
                            lastname : user.data.lastname,
                            created_at : user.data.created_at.substring(0, 10),
                        })
                    }) 
                }</div>
                <section className="details-card">
                    <div className="container">
                        <div className="col-md-6">
                            <span><h5>{"Prenom  : " + this.state.firstname}</h5></span>
                            <span><h5>{"Nom  : " + this.state.lastname}</h5></span>
                            <span><h5>{"Id  : " + this.state.id}</h5></span>
                            <span><h5>{"Crée le   : " + this.state.created_at}</h5></span>

                            <div className="card-desc">
                                <a className="btn-card"><NavLink to={`/Articles`}>Go back to Articles</NavLink></a>   
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
