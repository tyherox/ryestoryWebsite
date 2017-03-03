/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Buffer from '../components/buffer';
import { Messages } from '../../api/messages.js';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {name: "", email: "", message: "", isLoading: false, thankYou: false};
        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    setName(event){
        this.setState({name: event.target.value});
    }

    setEmail(event){
        this.setState({email: event.target.value});
    }

    setMessage(event){
        this.setState({message: event.target.value});
    }

    sendMessage(event){
        var name = this.state.name,
            email = this.state.email,
            message = this.state.message;

        this.setState({isLoading: true});
        console.log("Name:",name, "Email:",email, "Message:",message);

        Messages.insert({
            name: name,
            email: email,
            message: message
        });

        setTimeout(() => {
            this.setState({isLoading: false});
            this.setState({thankYou: true});
        }, 2000);

        event.preventDefault();
    }

    render() {

        let isLoading = this.state.isLoading,
            thankYou = this.state.thankYou;

        return (
            <div className="contactUs-container">
                <div className="contactUs-section">
                    <Buffer size="30"/>
                    <div><h1 className="title-section">CONTACT US</h1></div>
                    <Buffer size="30"/>
                    <Grid fluid>
                        <Row >
                            <Col md={6}>
                                <div className="contactUs-description-text">
                                <p className="description-section-big">
                                        Your thoughts are important to us! Please send us any questions, requests, or feedback to improve our service!
                                </p></div>
                            </Col>
                            <Col md={6}>
                                <form onSubmit={this.sendMessage}>
                                    <FieldGroup
                                        id="formName"
                                        type="text"
                                        label="Name"
                                        placeholder="Enter name"
                                        value = {this.state.name}
                                        onChange={this.setName}
                                    />
                                    <FieldGroup
                                        id="formEmail"
                                        type="email"
                                        label="Email address"
                                        placeholder="Enter email"
                                        value = {this.state.email}
                                        onChange={this.setEmail}
                                    />
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Message</ControlLabel>
                                        <FormControl componentClass="textarea"
                                                     placeholder="Write Here!"
                                                     value = {this.state.message}
                                                     onChange={this.setMessage}/>
                                    </FormGroup>
                                    <button type="submit" className="contact-button" bsStyle="danger" block>
                                        {isLoading ? 'Sending...' : thankYou ? "Thank You!" : "Send"}
                                    </button>
                                </form>
                            </Col>
                        </Row>
                    </Grid>
                    <Buffer size="30"/>
                </div>
            </div>
        );
    }
}

class FieldGroup extends Component{


    render(){
        return (
            <FormGroup controlId={this.props.id}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl {...this.props} />
                {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
            </FormGroup>
        );
    }
}
