/**
 * Created by JohnBae on 2/8/17.
 */

import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

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
                    <Button>Read More</Button>
                </div>
            )
        }
        else{
            return(<div ref="buffer">{this.props.content}</div>)
        }

    }
}