/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';

import'./ui/stylesheets/navBar.css'
import './ui/stylesheets/global.css'
import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/home.css'
import './ui/stylesheets/footer.css'
import './ui/stylesheets/text.css'
import './ui/stylesheets/image.css'
import './ui/stylesheets/blog.css'
import './ui/stylesheets/about.css'
import './ui/stylesheets/contactUs.css'
import './ui/stylesheets/align.css'
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {browserHistory} from 'react-router';

export default class App extends Component {

    componentDidUpdate(){

    }

    render() {
        return (
            <div className = "masterContainer">
                <NavbarInstance/>
                {this.props.children}
                <div className = 'footer'>
                    <div className = 'footerLogo' />
                    <a className = 'footer-facebook' href="https://www.facebook.com/StoryWithRye/"/>
                    <a className = 'footer-email' href = 'mailto:andre.kim@ryestory.com' />
                </div>
            </div>
        );
    }
}

class NavbarInstance extends Component{

    resetHome(state){
        console.log(state);
        var style = document.getElementById("versatileStyle");
        console.log(style);
        if(state) style.innerHTML = ".home-page{top: 0px;}";
        else style.innerHTML = ".home-page{top: -75px;}";
    }

    render(){
        return(
        <Navbar inverse collapseOnSelect onToggle={this.resetHome.bind(this)}>
            <Navbar.Header>

                <Navbar.Brand>
                        <div className = 'navBarLogo' onClick={()=>browserHistory.push('/')}></div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight >
                    <LinkContainer to="/home">
                        <NavItem>HOME</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <NavItem>ABOUT</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/blog">
                        <NavItem >BLOG</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <NavItem>CONTACT US</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        );
    }
}
