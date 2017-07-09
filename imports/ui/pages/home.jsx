/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Image, ResponsiveEmbed, Button} from 'react-bootstrap'
import Buffer from '../components/buffer.js';
import Tracker from '../components/tracker.js';
import Scroll from 'react-scroll';

export default class App extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        var image = this.refs.image,
            height = image.getBoundingClientRect().height;

        image.style.bottom = -(height / 2) + "px";

        image.addEventListener("resize", function(){
            var image = this.refs.image,
                height = image.getBoundingClientRect().height;
            image.style.bottom = -(height / 2) + "px";
        });
    }

    render() {

        var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
        console.log("Is Mac? ", isMac);

        return (
            <div className="page">
                <Grid className="home" fluid>

                    <Row className="page-section">

                        <div className="staggeredBuffer-top staggeredBuffer-bottom">
                            <h1>Trestle</h1>
                            <h2>The Craftable Writing Environment</h2>
                            <Buffer/>
                            <Buffer/>
                            {isMac ? <Button bsStyle="primary" href="https://gum.co/FOkJh">Download for Mac</Button> :
                                <Button bsStyle="primary">Browse from your Mac </Button>}
                            <Buffer/>
                            {isMac ? <p style={{color: "#c60050"}}>First 100 copies are free! <br/> (use "earlybird" offer code)</p> :
                                <p style={{color: "#c60050"}}>Windows Version Coming Soon</p>}
                            <Buffer/>
                            <Buffer/>
                        </div>

                        <div className="staggeredMedia" ref="image">
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px #EA005E"}}>
                                <embed src="/assets/demo.png" />
                            </ResponsiveEmbed>
                        </div>
                    </Row>

                    <Row className="page-section" >
                        <Col md={12} className="staggeredBuffer-top">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <p className="description">
                                Trestle is a writing app that feels like your virtual desk.
                                Craft your writing space like you would on a real desk
                                - by simply moving things around.
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Col>

                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center"}}>
                            <div className="image-size">
                                <Image src="/assets/customize.png" responsive />
                            </div>
                            <h3>
                                Customizable
                            </h3>
                            <p>
                                Create, move, and resize writing areas to fit your writing style and needs.
                            </p>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center"}}>
                            <div className="image-size">
                                <Image src="/assets/minimal.png" responsive />
                            </div>
                            <h3>
                                Minimalism
                            </h3>
                            <p>
                                Write in a clean, non-clustered environment ideal for long-term or creative writing.
                            </p>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center" }}>
                            <div className="image-size">
                                <Image src="/assets/save.png" responsive />
                            </div>
                            <h3>
                                Auto-Save
                            </h3>
                            <p>
                                I mean, we do live in the 21st century...
                            </p>
                        </Col>

                        <br/><br/>
                    </Row>

                    <Row className="page-section">
                        <Col md={12}>

                            <br/>
                            <br/>
                            <br/>
                            <Tracker/>
                            <Buffer/>

                            <p className="description">
                                New features will be added when download milestones are met.
                                Help bring new features to Trestle by telling your friends!
                            </p>

                            <Buffer/>
                            <Buffer/>
                            <Buffer/>

                            {isMac ? <Button bsStyle="primary" href="https://gum.co/FOkJh">Download for Mac</Button> :
                                <Button bsStyle="primary">Browse from your Mac </Button>}
                            <Buffer/>
                            {isMac ? <p style={{color: "#c60050"}}>First 100 copies are free! <br/> (use "earlybird" offer code)</p> :
                                <p style={{color: "#c60050"}}>Windows Version Coming Soon</p>}

                            <Buffer/>
                            <Buffer/>
                            <Buffer/>

                            <p style={{color: "gray"}}>Made with ♥ by Ryestory</p>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}
