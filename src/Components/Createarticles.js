import React, { Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import api from '../Services/Api';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import "../style/register.css";


export default class Createarticles extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            article_category_id: "",
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


    render() {
        if (this.state.redirect === true) {
            return (<Redirect to="/Articles" />)
        } else {
            return (
                <div className="Register">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="title">
                            <FormLabel>title</FormLabel>
                            <FormControl
                            autoFocus
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="content">
                            <FormLabel>content</FormLabel>
                            <FormControl
                            value={this.state.content}
                            onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup>
                        <FormGroup controlId="article_category_id">
                            <FormLabel>Articles category</FormLabel>
                            <FormControl
                            value={this.state.article_category_id}
                            onChange={this.handleChange}
                            type="text"
                            />
                        </FormGroup>
                        <Button
                            block 
                            onClick={() => {
                                api.apicreatearticles(this.state.title, this.state.content, this.state.article_category_id, (data) => {
                                    console.log(data)
                                    if (data.status === 201) {
                                        this.setState({
                                            redirect: true
                                        })
                                    }
                                })
                            }}
                            type="submit">
                            Send
                        </Button>
                    </form>
                </div>
            )
        }
    }
}