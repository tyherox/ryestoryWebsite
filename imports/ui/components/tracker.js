/**
 * Created by JohnBae on 6/27/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './tracker.css';

export default class Buffer extends Component {

    componentDidMount(){
    }

    render() {
        var downloads = 0;

        return(
            <div className="tracker">
                <div style={{fontSize: "3rem"}}>{downloads} / 500 Downloads!</div>
                <p style={{color: "gray"}}>
                    <b>Next Milestone:</b> Account System and Cloud Storage
                </p>
            </div>
        )
    }
}