/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Scroll from 'react-scroll';
import Buffer from '../components/buffer.js';

export default class App extends Component {

    toSubscribe() {
        Scroll.animateScroll.scrollTo(this.refs.subscribe.offsetTop);
    }

    handleSubmit() {
        var submitButton = ReactDOM.findDOMNode(this.refs.submitButton);
        submitButton.textContent = "Thank you for subscribing!";
        submitButton.style.border = 'none';
        submitButton.style.color = 'white';

        var submission = ReactDOM.findDOMNode(this.refs.submission);
        submission.style.display = 'none';
        submission.disabled = true;
    }

    showProgress(){
        console.log("SHOWING");
        var submitButton = ReactDOM.findDOMNode(this.refs.submitButton);
        submitButton.textContent = "Submitting...!";
        submitButton.style.color = 'grey';
        submitButton.disabled = true;
    }

    render() {
        return (
            <div>
                <iframe className='ghost' name="iframe1" onLoad={this.handleSubmit.bind(this)}></iframe>
                <div className = 'homeHeaderArea homeBgImagePng'>
                    <div className = 'homeHeaderText'>
                        <h1 className="title">TRESTLE</h1>
                        <br/><br/>
                        <p className="titleDescription">How do you organize your desk?</p>
                        <Buffer />
                    </div>
                </div>
                <div className='homeDescriptionArea'>
                    <Grid fluid>
                        <Buffer />
                        <Row >
                            <Buffer size ="30"/>
                            <div className='homeDescriptionText'>
                                <h1 className='subtitle'>TRESTLE?</h1>
                                <br/>
                                <p className='discription'>Trestle is an upcoming writing app that feels like your virtual desk. Craft your writing space like you would on a real desk - by simply moving things around.
                                    <br/><br/>Blaze through school papers with a compact multitasking layout or calmly illustrate your thoughts on a serene minimalist background.
                                    <br/><br/>You’ve never seen anything like this.</p>
                            </div>
                            <Buffer size ="30"/>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row>
                            <div className ='homeDescriptionArea'>
                                <Col md={6}>
                                    <div className = 'whiteSheetsPng homeDescriptionIconLayout'/>
                                </Col>
                                <Col md={6}>
                                    <div className="homeDescriptionText">
                                        <p className="texttitle">CLEAN SHEETS</p>
                                        <p className="discription">Trestle provides Sheets that are ready to be filled with great ideas. Multi-tasking? Open up multiple Sheets to work on multiple sections or projects! Using Markdown? Simply choose your syntax on the Sheets options!
                                        <br/><br/>And don’t worry about losing your work -- it’s all auto-saved.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row>
                            <div className ='homeDescriptionArea'>
                                <Col md={6}>
                                    <div className="homeDescriptionText">
                                        <p className="texttitle">DELIGHTFUL WIDGETS</p>
                                        <p className="discription">Clustered menu bars are never pretty to look at. Trestle places tools into delightful widgets that you can add and remove at anytime. No more crawling through complex menus and sub menus just to find a tool! And from dictionary to task-management widgets, you’ll find Trestle is more than just a pretty face.</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className = 'delightfulWidgetsIcon'/>
                                </Col>
                            </div>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row>
                            <div className = 'homeDescriptionArea'>
                                <Col md={6}>
                                    <div className = 'flexibleLayoutIcon'/>
                                </Col>
                                <Col md={6}>
                                    <div className="homeDescriptionText">
                                        <p className="texttitle">FLEXIBLE LAYOUT</p>
                                        <p className="discription">Need a simple writing space? A word processing powerhouse? Anything in between? No sweat. Drag and drop widgets to build the layout you need. Save multiple layouts so you can quickly switch between sessions. Oh, and want to focus on a particular task? The pin and hide feature hides all your unpinned widgets.
                                        <br/><br/>Build whatever layout you prefer in a giffy!</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row className='homeFeaturesArea'>
                            <Grid fluid>
                                <Row>
                                    <Col md={12}>
                                        <h1 className="subtitle">FEATURES</h1>
                                        <Buffer size ="30"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout fullScreenPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Full-Screen</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout syntaxPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Syntax</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout exportPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Export</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout sentenceFocusPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Sentence Focus</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout themesPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Themes</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'homeIconLayout savePng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Auto-Save</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                            <Buffer/>
                            <Buffer/>
                        </Row>
                        <Buffer size ="30"/>
                    </Grid>
                </div>

                <div className='homeContactUsArea'>

                    <div className = 'homeContactUsText'>
                        <Buffer />
                        <Buffer />
                        <h1 className='subtitle'>CONTACT US</h1>
                        <Buffer />
                    </div>
                </div>
            </div>
        );
    }
}