/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Buffer from '../components/buffer.js';

export default class App extends Component {

    componentDidMount(){console.log("MOUNTED CONTACT")}

    render() {
        return (
            <div className='aboutContainer'>
                <div className='aboutOurStoryArea'>
                    <h1 className='subtitle'>Our Story</h1>
                    <div className='aboutOurStoryText'>
                    </div>
                </div>
                <div className='aboutOurMembersArea'>
                    <h1 classsName='subtitle'>Our Members</h1>
                </div>
            </div>
        );
    }
}