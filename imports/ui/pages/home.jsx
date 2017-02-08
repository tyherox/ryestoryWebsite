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
                <div className = 'homeHeaderArea'>
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
                                <p className='discription'>Trestle is an upcoming writing app that feels like your virtual desk.Craft your writing space like you would on a real desk - by simply moving things around.
                                    <br/><br/>Want to rearrange your layout? Drag and Drop! Want tools? Open up your widgets!
                                    <br/><br/>You've never seen anything like this.</p>
                            </div>
                            <Buffer size ="30"/>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row>
                            <div className ='homeDescriptionArea'>
                                <Col md={6}>
                                    <div className = 'cleanSheetsIcon'/>
                                </Col>
                                <Col md={6}>
                                    <div className="homeDescriptionText">
                                        <p className="texttitle">CLEAN SHEETS</p>
                                        <p className="discription">Trestle provides Sheets that are ready to be filled with great ideas. Open up multiple Sheets to work on multiple projects. Don’t worry about losing your work -- its all auto-saved.<br/><br/>
                                            If your Sheets feel clustered, hide your toolbar in Settings. Want to use Markdown? Simply choose your syntax on the Sheets options! Choose how your piece of paper will look like.
                                        </p>
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
                                        <p className="texttitle">FLEXIBLE LAYOUT</p>
                                        <p className="discription">Drag and drop to decorate your own cozy desk. Save multiple layouts so you don’t forget them. Want to focus on one work? Pin your Sheet and click Hide on your side toolbar. Now its just you and your work.<br/><br/>
                                            Minimalism or Multitasking? Choose whatever you find comfortable.</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className = 'flexibleLayoutIcon'/>
                                </Col>
                            </div>
                        </Row>
                        <Buffer />
                        <hr/>
                        <Buffer />
                        <Row>
                            <div className = 'homeDescriptionArea'>
                                <Col md={6}>
                                    <div className = 'delightfulWidgetsIcon'/>
                                </Col>
                                <Col md={6}>
                                    <div className="homeDescriptionText">
                                        <p className="texttitle">DELIGHTFUL WIDGETS</p>
                                        <p className="discription">Your tools change a great work into a masterpiece. Need a dictionary? Need to organize your tasklist? Drag and drop your Widgets of all kinds for your writing. Just place it where it needs to be.</p>
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
                                        <div className = 'home_iconLayout'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Full-Screen</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'home_iconLayout'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Syntax</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'home_iconLayout exportPng'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Export</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <div className = 'home_iconLayout'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Sentence Focus</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'home_iconLayout'/>
                                        <br/>
                                        <div className = 'titleDescription'>
                                            <p>Themes</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className = 'home_iconLayout'/>
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