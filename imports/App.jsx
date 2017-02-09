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
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {browserHistory} from 'react-router';

export default class App extends Component {

    componentDidUpdate(){

    }

    render() {
        return (
            <div className = "masterContainer">
                <NavbarInstance />
                {this.props.children}
                <div className = 'footer'>
                    <div className = 'footerLogo'></div>
                    <a className = 'footerContact' href = 'mailto:andre.kim@ryestory.com'>Contact us: andre.kim@ryestory.com</a>
                </div>
            </div>
        );
    }
}

class NavbarInstance extends Component{

    componentDidMount(){
        console.log("mounted navbar");
    }

    render(){
        return(
        <Navbar inverse collapseOnSelect>
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
