/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';

import './ui/stylesheets/global.css'
import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/home.css'
import './ui/stylesheets/footer.css'
import './ui/stylesheets/text.css'
import './ui/stylesheets/image.css'
import './ui/stylesheets/align.css'
import './ui/stylesheets/components.css'

export default class App extends Component {

    componentDidUpdate(){

    }

    render() {

        return (
            <div className = "masterContainer">
                {this.props.children}
            </div>
        );
    }
}
