/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Buffer from '../components/buffer.js';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

export default class App extends Component {

    componentDidMount(){console.log("MOUNTED CONTACT")}

    render() {
        return (
            <div className='aboutContainer'>
                <div className='aboutOurStoryArea'>
                   <div className='aboutOurStoryText'>
                       <Buffer size="45"/>
                       <div className="contactUs-title">Our Story</div>
                       <Buffer size="30"/>
                        <Grid fluid>
                            <Row>
                                <Col md={6}>
                                    <Image src="/assets/logoIcon.png" height='180px' />
                                </Col>
                                <Col md={6}>
                                    <p className='discription'>At Ryestory, we celebrate the individual and encourage individuality.<br/><br/>
                                        With recent technological advances leaving many behind, we felt a focus on friendly, intuitive software was necessary. As a result we formed Ryestory to build a bridge between people and technology. We aspire to create technological brilliance through meticulous user experience design and innovative applications of software.</p>
                                </Col>
                            </Row>
                        </Grid>
                       <Buffer size="45"/>
                    </div>
                </div>
                <div className='aboutOurMembersArea'>
                    <div className='aboutOurMembersText'>
                        <Buffer size="45"/>
                        <div className="contactUs-title">Our Team</div>
                        <Buffer/>
                        <Grid fluid>
                            <Row>
                                <Col md={3}>image</Col>
                                <Col md={3}>discription</Col>
                                <Col md={3}>image</Col>
                                <Col md={3}>discription</Col>
                            </Row>
                            <Row>
                                <Col md={3}>image</Col>
                                <Col md={3}>discription</Col>
                                <Col md={3}>image</Col>
                                <Col md={3}>discription</Col>
                            </Row>
                        </Grid>
                        <Buffer size="45"/>
                    <Buffer/>
                    </div>
                </div>
            </div>
        );
    }
}