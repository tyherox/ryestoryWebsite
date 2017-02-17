/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Buffer from '../components/buffer.js';
import {Grid, Row, Col, Image,} from 'react-bootstrap';

export default class App extends Component {

    componentDidMount(){console.log("MOUNTED CONTACT")}

    render() {
        return (

            <div className='about-container'>

                <div className='about-ourstory-section'>
                    <div className="about-ourstory-text">
                    <Buffer size="30"/>
                        <div ><h1 className="title-section">Our Story</h1></div>
                        <Buffer size="30"/>
                    <Grid fluid>
                        <Row>
                            <Col md={5}>
                                <Image src="/assets/logoIcon.png" height='180px' />
                            </Col>
                            <Col md={7}>
                                <p className='description-section about-ourstory-description'>Seemingly small and insignificant, Rye is a hearty, nutritious crop that is an ingredient to many of our foods. We believe there’s a lot of similarities when it comes to how we see our ideas. Although we often dismiss our ideas as insignificant, with the proper nurturing and development, ideas can become powerful influential stories. And aren’t all stories worth telling?
                                    <br/><br/>
                                    That’s what we aspire to do at the end of the day. Help tell stories.
                                    <br/><br/>
                                    With the inspiration from rye and the belief that every idea is a story to waiting to be told, we created Ryestory to harness the power of technology to help bring life to ideas. With innovative products like Trestle, we hope you will discover and develop more ideas than ever before. And if a an idea you had turned out to be a pretty good story, tell us about it! We love a good story!
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                    </div>
                </div>
                {/* <div className='aboutOurMembersArea'>
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
                </div>  */}
            </div>
        );
    }
}