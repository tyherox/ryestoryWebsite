/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Image, ResponsiveEmbed, Button} from 'react-bootstrap'
import Buffer from '../components/buffer.js';
import Scroll from 'react-scroll';

export default class App extends Component {

    constructor(props){
        super(props);

    }

    render() {

        var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
        console.log("Is Mac? ", isMac);

        return (
            <div className="page">
                <Grid fluid>

                    <Row className="page-section">

                        <div className="staggeredBuffer">
                            <h1>Trestle</h1>
                            <h2>The Craftable Writing Environment</h2>
                            <Buffer/>
                            <Buffer/>
                            <Button bsStyle="primary">Download for Mac</Button>
                            <Buffer/>
                            <p style={{color: "#c60050"}}>First 100 copies are free!</p>
                        </div>

                        {/*<div className="staggeredMedia">
                            <ResponsiveEmbed a16by9 style={{border: "solid 2px pink"}}>
                                <embed src="/assets/trestle1.png" />
                            </ResponsiveEmbed>
                        </div>*/}
                    </Row>

                    <Row className="page-section" >
                        <Col md={12} className="staggeredBuffer-top">
                            <p className="description">
                                Trestle is a writing app that feels like your virtual desk.
                                Craft your writing space like you would on a real desk
                                - by simply moving things around.
                            </p>
                            <Buffer/>
                            <Buffer/>
                        </Col>

                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center"}}>
                            <Image src="/assets/placeHolder.png" responsive />
                            <h3>
                                Customizable
                            </h3>
                            <p>
                                Create, move, and resize writing areas to fit your writing style and needs.
                            </p>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center"}}>
                            <Image src="/assets/placeHolder.png" responsive />
                            <h3>
                                Minimalism
                            </h3>
                            <p>
                                Write in a clean, non-clustered environment ideal for long-term or creative writing.
                            </p>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: "25px", backgroundPosition: "center" }}>
                            <Image src="/assets/placeHolder.png" responsive />
                            <h3>
                                Auto-Save
                            </h3>
                            <p>
                                Forgot to save? Don’t worry, it’s all there.
                            </p>
                        </Col>
                        <Col xs={12} md={12} className="staggeredBuffer-bottom" />
                    </Row>

                    <Row className="page-section">
                        <Col md={12} className="staggeredBuffer">
                            <p className="description">
                                Trestle is a writing app that feels like your virtual desk.
                                Craft your writing space like you would on a real desk
                                - by simply moving things around.
                            </p>

                            <Buffer/>
                            <Buffer/>
                            <Buffer/>

                            <Button bsStyle="primary">Download for Mac</Button>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}
