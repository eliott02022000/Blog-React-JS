import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import api from '../Services/Api';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import "../style/articles.css"
import { NavLink } from 'react-router-dom'


export default class Articles extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        api.apiallarticles((json) => {
            this.setState({
                data: json.data
            })
        })
    }
    
    render() {
        return(
            <div>
                { this.state.data.reverse().map((article) => {
                    // return (<h2>{ article.User.firstname + "    " + article.User.lastname + "  :  " + article.title + "  ===>  " + article.content }</h2>)
                    return(
                        <section className="details-card">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card-content">
                                            <div className="card-img">
                                                <img src="https://placeimg.com/380/230/nature" alt=""></img>
                                                <span><h5>{"By   " + article.User.firstname}</h5></span>
                                            </div>
                                            <div className="card-desc">
                                                <h3>{article.title}</h3>
                                                <p>{article.content}</p>
                                                <p>{article.id}</p>
                                                <a className="btn-card"><NavLink to={`/Article/${article.id}`}>Read</NavLink></a>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }) }
                
            </div>
       
            
        )
    }
}