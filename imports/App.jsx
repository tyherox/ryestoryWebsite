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
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

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
                    <div className = 'navBar-logo'></div>
                    <LinkContainer to="/">
                        <a className = 'navBar-logo'>&nbsp;</a>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to="/blog">
                        <MenuItem >Blog</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <MenuItem>Contact</MenuItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}
