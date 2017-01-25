/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Scroll from 'react-scroll';

export default class App extends Component {

    toSubscribe() {
        Scroll.animateScroll.scrollTo(this.refs.subscribe.offsetTop);
    }

    render() {
        return (
            <div>
                <div className = 'home_headerArea'>
                    <div className = 'home_headerText'>
                        <Jumbotron>
                            <h1>TRESTLE</h1>
                            <br/>
                            <p>How do you organize your desk?</p>
                            <div className = 'buffer'/>
                            <p><button className = 'rye_button' onClick = {this.toSubscribe.bind(this)}>Sign me up!</button></p>
                        </Jumbotron>
                    </div>
                </div>
                <div className = 'home_landingPage'>
                    <Grid fluid>
                        <div className = 'buffer'/>
                        <Row className="show-grid">
                            <Col md={12}>
                                <Grid>
                                    <div className = 'bufferMega'/>
                                    <Row bsClass = "vCenter">
                                        <Col md = {6}>
                                            <video width="100%" controls>
                                                <source src="assets/Trestle-Teaser.mp4" type="video/mp4"/>
                                            </video>
                                        </Col>
                                        <Col md={6}>
                                            <div className = "home_intro">
                                                <h1><b>TRESTLE?</b></h1>
                                                <br/>
                                                <p> Trestle is a writing app that feels like your virtual desk. Craft your writing space like you would on a real desk - by simply moving things around.
                                                    <br/><br/>
                                                    Want to rearrange your layout? Drag and Drop!
                                                    Want tools? Open up the your widgets!
                                                    <br/><br/>
                                                    You've never seen anything like this.
                                                </p>
                                                <br/><br/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className = 'bufferMega'/>
                                </Grid>
                            </Col>
                        </Row>
                        <div className = 'buffer'/>
                        <hr/>
                        <div className = 'buffer'/>
                        <Row className="show-grid">
                            <div className = "home_features">
                                <Col md={12}>
                                    <h1><b>FEATURES</b></h1>
                                    <div className = 'bufferMega'/>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconLayout'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Customize your layout</b></p>
                                        <p>Nothing is set in stone in Trestle, even the layout. Resize, rearrange, and replace widgets to construct the perfect environment.</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconWidget'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Delightful Widgets</b></p>
                                        <p>Need a dictionary? Need a task list? Trestle provides different types widgets that you need!</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconSheet'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Shiiit. So many Sheets</b></p>
                                        <p>Open and customize as many writing spaces as you need! Multi-tasking has never been easier!</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <div className = 'bufferMega'/>
                    </Grid>
                    <div className = 'home_subscribe' ref = 'subscribe'>

                        <div className="bufferMega" />
                        <div className="bufferMega" />
                        <div className="bufferMega" />
                        <h1><b>COMMING SOON!</b></h1>
                        <div className = 'buffer'/>
                        <form action="https://docs.google.com/a/ryestory.com/forms/d/e/1FAIpQLSc5UsKau_hGxbkUrH2PxXTBoaBh9BGyIWzHtBCQxK3hroO08w/formResponse"
                              target="iframe1"
                              method="POST"
                              id="mG61Hd">
                            <p><b>Subscribe to our email listing to be notified on the latest developments of Trestle!</b></p>
                            <div className="bufferMega" />
                            <input type = "email" placeholder = "Email:" className = 'home_input' required></input>
                            <br/><br/>
                            <button type="submit" className = 'home_emailButton rye_button'>Sign me up!</button>
                        </form>
                        <div className="bufferMega" />
                        <div className="bufferMega" />
                        <div className="bufferMega" />

                    </div>
                    <Grid>
                        <div className = 'bufferMega'/>
                        <Row bsClass = "vCenter">
                            <Col md = {2}> <div className = 'home_iconLogo'/> </Col>
                            <Col md={10}>
                                <div className = 'home_aboutDescription'>
                                    <h1><b>WHO ARE WE?</b></h1>
                                    <br/>
                                    <p>Hi, we’re Ryestory, a small and cozy team based in South Korea. We aspire to make intuitive software that encourages individuality and unique personality.

                                        How about you follow us on our Facebook Page!</p>
                                </div>
                            </Col>
                        </Row>
                        <div className = 'bufferMega'/>
                    </Grid>
                </div>
            </div>
        );
    }
}
