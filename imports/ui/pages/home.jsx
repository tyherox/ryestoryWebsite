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
            <div className="home-page">
                <iframe className='ghost' name="iframe1" onLoad={this.handleSubmit.bind(this)}></iframe>
                <div className = 'home-header-section homeBgImagePng'>
                    <div className = 'home-header-text'>
                        <h1 className="title-brandname">TRESTLE</h1>
                        <br/>
                        <p className="description-brandname">How do you organize your desk?</p>
                    </div>
                </div>
                <div className='home-trestle-description-section'>
                    <Grid fluid>
                        <Row >
                            <Buffer size ="20"/>
                            <div className='home-trestle-description-text'>
                                <h1 className='title-section'>TRESTLE?</h1>
                                <Buffer/>
                                <p className='description-section'>Trestle is an upcoming writing app that feels like your virtual desk. Craft your writing space like you would on a real desk - by simply moving things around.
                                    <br/><br/>Blaze through school papers with a compact multitasking layout or calmly illustrate your thoughts on a serene minimalist background.
                                    <br/><br/>You’ve never seen anything like this.</p>
                            </div>
                            <Buffer size="20"/>
                        </Row>
                        <hr/>
                        <Row>
                            <Buffer size="20"/>
                            <div className ='home-description-section'>
                                <Col md={9}>
                                    <div className="home-description-image">
                                    <Image src="/assets/whiteSheets.png" responsive />
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="home-description-text">
                                        <p className="title-section-small">CLEAN SHEETS</p>
                                        <p className="description-section">Trestle provides Sheets that are ready to be filled with great ideas. Multi-tasking? Open up multiple Sheets to work on multiple sections or projects! Using Markdown? Simply choose your syntax on the Sheets options!
                                            <br/><br/>And don’t worry about losing your work -- it’s all auto-saved.</p>
                                    </div>
                                </Col>

                            </div>
                        </Row>
                        <Buffer size="20"/>
                        <hr/>
                        <Row>
                            <Buffer size="20"/>
                            <div className ='home-description-section'>
                                <Col md={9} mdPush={3}>
                                    <div className="home-description-image">
                                        <Image src="/assets/whiteWidgets.png" responsive />
                                    </div>
                                </Col>
                                <Col md={3} mdPull={9}>
                                    <div className="home-description-text">
                                        <p className="title-section-small">DELIGHTFUL WIDGETS</p>
                                        <p className="description-section">Clustered menu bars are never pretty to look at. Trestle places tools into delightful widgets that you can add and remove at anytime. No more crawling through complex menus and sub menus just to find a tool! And from dictionary to task-management widgets, you’ll find Trestle is more than just a pretty face.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Buffer size="20"/>
                        <hr/>
                        <Row>
                            <Buffer size="20"/>
                            <div className ='home-description-section'>
                                <Col md={9}>
                                    <div className="home-description-image">
                                        <Image src="/assets/whiteLayout.png" responsive />
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="home-description-text">
                                        <p className="title-section-small">FLEXIBLE LAYOUT</p>
                                        <p className="description-section">Need a simple writing space? A word processing powerhouse? No sweat. Drag and drop widgets to build the layout you need and save multiple layouts so you use them later. Oh, and want to focus on a particular task? Click the hid button to hide all your unpinned widgets.
                                            <br/><br/>Build whatever layout you prefer in a giffy!</p>
                                    </div>
                                </Col>
                            </div>
                            <Buffer size="20"/>
                        </Row>
                        <hr/>
                    </Grid>
                </div>
                <Buffer size="20"/>
                <div className='home-features-section'>
                    <Grid fluid>
                            <Row>
                                <Col md={12}>
                                    <h1 className="title-section">FEATURES</h1>
                                    <Buffer size ="20"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className = 'home-features-image full-screen-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Full-Screen</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">The maximum full view at your disposal. Need something else? You can always minimize!</p>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home-features-image syntax-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Syntax</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">Trestle supports Markdown! Mark it down.</p>
                                </Col>
                                <Col md={4}>
                                    <div className = 'home-features-image export-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Export</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">Export your work into docx, PDF, txt, and rtf files.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <div className = 'home-features-image sentence-focus-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Sentence Focus</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">Focus on one sentence by graying everything else out... details will be uncovered!</p>

                                </Col>
                                <Col md={4}>
                                    <div className = 'home-features-image themes-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Themes</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">Choose a polished theme to add yet another level of personalization.</p>

                                </Col>
                                <Col md={4}>
                                    <div className = 'home-features-image save-image'/>
                                    <br/>
                                    <div className = 'subtitle-section'>
                                        <p>Auto-Save</p>
                                    </div>
                                    <p className="description-section center-block home-features-text">Forgot to save? Don’t worry, it’s all there.</p>
                                </Col>
                            </Row>
                        </Grid>
                </div>

                <div className='home-subscribe-section'>
                    <div className = 'home-subscribe-text'>
                        <Buffer size="20"/>
                        <h1 className='title-section'>Subscribe</h1>
                        <Buffer size="10"/>
                        <p className="subtitle-section">Subscribe to hear the latest news about Trestle!</p>
                        <Buffer/>
                        <form action="https://docs.google.com/a/ryestory.com/forms/d/e/1FAIpQLSc5UsKau_hGxbkUrH2PxXTBoaBh9BGyIWzHtBCQxK3hroO08w/formResponse"
                              target="iframe1"
                              method="POST"
                              id="mG61Hd">
                            <input type = "email" placeholder ="Email : "
                            className = 'home-email-box subtitle-section ' required></input>

                           <br/> <br/><Button bsStyle="danger" type="submit" className = 'home-email-button' ref="submitButton">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}