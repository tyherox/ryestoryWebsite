/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'

export default class App extends Component {

    render() {
        return (
            <div>
                <div className = 'home_headerArea'>
                    <div className = 'home_headerText'>
                        <Jumbotron>
                            <h1>Trestle</h1>
                            <h2>How do you organize your desk?</h2>
                            <p>Craft your own writing space. Use your own writing style.</p>
                            <p><Button bsStyle="primary">Sign me up!</Button></p>
                        </Jumbotron>
                    </div>
                </div>
                <div className = 'home_landingPage'>
                    <Grid fluid>
                        <Row className="show-grid">
                            <Col xs={12}>
                               <div className = "home_intro">
                                   <br/><br/>
                                   <h1><b>TRESTLE?</b></h1>
                                   <p> Trestle is a software that acts as your virtual desk. You get to craft your working space that arranged best for your working style.
                                       <br/><br/>
                                       Want to rearrange your layout? Drag and Drop!
                                       Want tools? Open up the your widgets!
                                       <br/><br/>
                                       Created it the way you want your desk to be.
                                   </p>
                                   <br/><br/>
                                   <p><b>See how it works!</b></p>
                                   <Button> VIDEO </Button>
                               </div>
                            </Col>
                        </Row>
                        <hr/>
                        <Row className="show-grid">
                            <div className = "home_features">
                                <Col md={12}>
                                    <h1><b>Features</b></h1>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconLayout'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Customize your layout</b></p>
                                        <p>Trestle lets you create the environment you need. Resizing, rearranging, and replacing widgets has become so easy.</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconWidget'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Whatever widget you need</b></p>
                                        <p>Need a dictionary? Need a task list? Trestle provides different types widgets that you need!</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home_iconSheet'/>
                                    <br/>
                                    <div className = 'home_iconDescriptions'>
                                        <p><b>Shiiit. So many Sheets</b></p>
                                        <p>Open as many writing spaces as you need! Customize your sheets with the tools you need. By the way, Trestle also supports Markdown!</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                    <div className = 'home_subscribe'>
                        <p>Coming Soon!</p>
                        <form action="https://docs.google.com/a/ryestory.com/forms/d/e/1FAIpQLSc5UsKau_hGxbkUrH2PxXTBoaBh9BGyIWzHtBCQxK3hroO08w/formResponse"
                              target="iframe1"
                              method="POST"
                              id="mG61Hd">
                            <p>Email:</p>
                            <input type="email" placeholder="Email" required></input>
                            <Button type="submit">Let me know when it's out!</Button>
                        </form>
                    </div>
                    <Grid fluid>
                        <Row className="show-grid">
                            <div className = 'home_about'>
                                <Col md = {2}> <div className = 'home_iconLogo'/> </Col>
                                <Col md={10}>
                                    <Panel>
                                        <p>WHO ARE WE?</p>
                                        <p>Hi, we’re Ryestory, a small and cozy team based in South Korea. We aspire to make intuitive software that encourages individuality and unique personality.

                                            How about you follow us on our Facebook Page!</p>
                                    </Panel>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}
