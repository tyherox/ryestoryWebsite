/**
 * Created by JohnBae on 2/8/17.
 */

import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class BlogEntry extends Component {

    componentDidMount(){

    }

    render() {
        if(this.props.view=="preview"){
            return(
                <div className="blogEntry-preview">
                    <p className="blogEntry-title"><b>{this.props.title}</b></p>
                    <p className="blogEntry-date">{this.props.date}</p>
                    <p className="blogEntry-previewText">{this.props.preview}</p>
                    <Button className="blogEntry-readMore" bsStyle="danger" onClick={()=>browserHistory.push('/blog/'+ this.props.title +'')}>Read More</Button>
                </div>
            )
        }
        else{
            return(
                <div className="blogEntry-post">
                    <p className="blogEntry-title"><b>{this.props.title}</b></p>
                    <p className="blogEntry-date">{this.props.date}</p>
                    <p className="blogEntry-content">{this.props.content}</p>
                    <Button className="blogEntry-readMore" bsStyle="danger" onClick={()=>browserHistory.push('/blog')}>Back</Button>
                </div>
            )
        }

    }
}