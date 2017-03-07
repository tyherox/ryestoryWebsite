/**
 * Created by JohnBae on 2/8/17.
 */

import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import Buffer from '../components/buffer.js';

export default class BlogEntry extends Component {

    componentDidMount(){

    }

    render() {
        if(this.props.view=="preview"){
            return(
                <div className="blogEntry-preview">
                    <p className="blogEntry-title">{this.props.title}</p>
                    <div className="blogEntry-date">{this.props.date}</div>
                    <div className="blogEntry-previewText">{this.props.preview}</div>
                    <Buffer size="5"/>
                    <button className="blog-button"onClick={()=>browserHistory.push('/blog/'+ this.props.date +'')}>Read More</button>
                </div>
            )
        }
        else{
            return(
                <div className="blogEntry-post">
                    <p className="blogEntry-header">{this.props.title}</p>
                    <div className="blogEntry-date">{this.props.date}</div>
                    <Buffer size="5"/>
                    <div className="blogEntry-content">{this.props.content}</div>
                    <Buffer/>
                    <button className="blog-button" onClick={()=>browserHistory.push('/blog')}>Back</button>
                </div>
            )
        }

    }
}