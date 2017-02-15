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
                                <p className='description-section about-ourstory-description'>At Ryestory, we celebrate the individual and encourage individuality.<br/><br/>
                                    With recent technological advances leaving many behind, we felt a focus on friendly, intuitive software was necessary. As a result we formed Ryestory to build a bridge between people and technology. We aspire to create technological brilliance through meticulous user experience design and innovative applications of software.</p>
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