/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, IndexLink, Link } from 'react-router'
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, Panel} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

import'./ui/stylesheets/navBar.css'
import './ui/stylesheets/global.css'
import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/home.css'
import './ui/stylesheets/footer.css'

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
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a><i className="navLogo"></i></a>
                        </LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}
