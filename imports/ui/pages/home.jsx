/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col,Image, Modal, Button} from 'react-bootstrap'
import Buffer from '../components/buffer.js';
import Scroll from 'react-scroll';

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {showVideo: false};
    }

    toSubscribe() {
        var subscription = ReactDOM.findDOMNode(this.refs.subscribe);
        console.log(subscription);
        Scroll.animateScroll.scrollTo(subscription.offsetTop);
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

    showVideo(){
        this.setState({showVideo: true});
    }

    closeVideo(){
        this.setState({showVideo: false});
    }

    render() {
        return (
            <div className="home-page">
                <iframe className='ghost' name="iframe1" onLoad={this.handleSubmit.bind(this)}></iframe>
                <div className='home-trestle-description-section'>
                    <Grid fluid>
                        <Row className = 'home-section0'>
                            <div className ='home-description-section'>
                                <Col md={5}>
                                    <div className = 'home-header-section'>
                                        <div className = 'home-header-text'>
                                            <h1 className="title-brandname">TRESTLE</h1>
                                            <br/>
                                            <p className="description-brandname">How do you organize your desk?</p>
                                            <br />
                                            <button className = 'home-button' onClick={this.toSubscribe.bind(this)}>Sign me up!</button>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={7} className = "home-sections-header">
                                    <div className = 'home-header-text'>
                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/NpAMWhVnDqY?autoplay=1" frameBorder="0" allowFullScreen  ></iframe>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className = "home-gogo">
                            <div className ='home-gogoSection'>
                                <Col md={8}>
                                    <div className = 'home-gogoTextSection'>
                                        <div className = 'home-gogoText'>
                                            <a className='home-gogoFont' href="https://igg.me/at/rs-trestle/16192070">Fund us now on Indiegogo!</a>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className = "home-intro">
                            <Buffer size="30"/>
                            <div className='home-trestle-description-text'>
                                <h1 className='title-section'>TRESTLE?</h1>
                                <br/><br/>
                                <p className='description-section'>Trestle is an upcoming writing app that feels like your virtual desk. Craft your writing space like you would on a real desk - by simply moving things around.
                                    <br/><br/>Blaze through school papers with a compact multitasking layout or calmly illustrate your thoughts on a serene minimalist background.
                                    <br/><br/>You’ve never seen anything like this.</p>
                            </div>
                            <Buffer size="30"/>
                        </Row>
                        <Row className = 'home-section1'>
                            <div className ='home-description-section'>
                                <Col md={8} className = "home-sections">
                                    <div className="home-description-image">
                                    <Image src="/assets/whiteSheets.png" responsive />
                                    </div>
                                </Col>

                                <Col md={4} className = "home-sections">
                                    <div className="home-header-text home-description-text home-description-text-left">
                                        <p className="title-section-small">CLEAN SHEETS</p>
                                        <br/>
                                        <p className="description-section">Trestle provides Sheets that are ready to be filled with great ideas. Multi-tasking? Open up multiple Sheets to work on multiple sections or projects! Using Markdown? Simply choose your syntax on the Sheets options!
                                            <br/><br/>And don’t worry about losing your work -- it’s all auto-saved.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row className = 'home-section2'>
                            <div className ='home-description-section'>
                                <Col md={8} mdPush={4} className = "home-sections">
                                    <div className="home-description-image">
                                        <Image src="/assets/blackWidgets.png" responsive />
                                    </div>
                                </Col>
                                <Col md={4} mdPull={8} className = "home-sections">
                                    <div className="home-header-text home-description-text home-description-text-right">
                                        <p className="title-section-small">DELIGHTFUL WIDGETS</p>
                                        <br/>
                                        <p className="description-section">Clustered menu bars are never pretty to look at. Trestle places tools into delightful widgets that you can add and remove at anytime. No more crawling through complex menus and sub menus just to find a tool! And from dictionary to task-management widgets, you’ll find Trestle is more than just a pretty face.</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row  className = 'home-section3'>
                            <div className ='home-description-section'>
                                <Col md={8} className = "home-sections">
                                    <div className="home-description-image" >
                                        <Image src="/assets/whiteLayout.png" responsive />
                                    </div>
                                </Col>
                                <Col md={4} className = "home-sections">
                                    <div className="home-header-text home-description-text home-description-text-left">
                                        <p className="title-section-small">FLEXIBLE LAYOUT</p>
                                        <br/>
                                        <p className="description-section">Need a simple writing space? A word processing powerhouse? No sweat. Drag and drop widgets to build the layout you need and save multiple layouts so you use them later. Oh, and want to focus on a particular task? Click the hid button to hide all your unpinned widgets.
                                            <br/><br/>Build whatever layout you prefer in a giffy!</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Grid>
                </div>
                <div className='home-features-section'>
                    <br/>
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
                <br/>
                <div className = 'home-demo-section'>
                    <div className = 'home-demo-text'>
                        <Buffer size= "20"/>
                        <h1 className= "title-section"> TRY IT OUT YOURSELF!</h1>
                        <p className="subtitle-section">Change your layout by dragging and resizing your blocks</p>
                        {/* A JSX comment */}
                        <p className="subtitle-section">Download the Alpha to try out the actual working prototype!</p>
                        <Buffer size= "20"/>
                        <button className = 'home-button'>
                        Download the Alpha!
                        </button>
                    </div>
                </div>
                <div className='home-subscribe-section' ref="subscribe">
                    <div className = 'home-subscribe-text'>
                        <Buffer size="20"/>
                        <h1 className='title-section'>SUBSCRIBE</h1>
                        <Buffer size="10"/>
                        <p className="subtitle-section">Subscribe to be notified when it's out!</p>
                        <Buffer/>
                        <form action="https://docs.google.com/a/ryestory.com/forms/d/e/1FAIpQLSc5UsKau_hGxbkUrH2PxXTBoaBh9BGyIWzHtBCQxK3hroO08w/formResponse"
                              target="iframe1"
                              method="POST"
                              id="mG61Hd">
                            <input type = "email" placeholder ="Email : "
                            className = 'home-email-box subtitle-section ' required></input>
                            <br/><br/>
                            <button type="submit" className = 'home-button' ref="submitButton">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
