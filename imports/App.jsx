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
                <Panel className = 'footer'>
                    <h3 className = 'footerLogo'>Ryestory</h3>
                    <p className = 'footerContact'>Contact us</p>
                </Panel>
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
            <Navbar collapseOnSelect fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a>Ryestory</a>
                        </LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        );
    }
}
